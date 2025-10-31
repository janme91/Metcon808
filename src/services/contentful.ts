import { createClient, type EntryCollection, type Entry } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = (spaceId && accessToken) ? createClient({
  space: spaceId,
  accessToken: accessToken,
}) : null;

const fetchContentfulData = async <T>(contentType: string, options: object = {}): Promise<EntryCollection<T>> => {
  const emptyCollection = {
    total: 0,
    skip: 0,
    limit: 0,
    items: [],
    toPlainObject: () => ({ total: 0, skip: 0, limit: 0, items: [] }),
  };

  if (!client) {
    console.error('Contentful client is not initialized. Please check your .env file.');
    return emptyCollection;
  }

  try {
    return await client.getEntries<T>({
      content_type: contentType,
      ...options,
    });
  } catch (error: any) {
    if (error.name === 'InvalidQuery' && error.message.includes('unknownContentType')) {
      console.error(
        `[Contentful-Fehler] Der Inhaltstyp (Content Type) mit der API-ID "${contentType}" wurde nicht gefunden. ` +
        `Bitte überprüfen Sie, ob der Inhaltstyp in Ihrem Contentful Space existiert und die ID korrekt ist.`
      );
    } else {
      console.error(`Fehler beim Abrufen von "${contentType}" von Contentful:`, error);
    }
    return emptyCollection;
  }
};

export const getHeroContent = async () => {
  const entries = await fetchContentfulData('hero', { limit: 1 });
  return entries.items[0]?.fields;
};

export const getServices = async () => {
  const entries = await fetchContentfulData('service', { order: 'fields.order' });
  return entries.items.map(item => item.fields);
};

export const getAboutContent = async () => {
  const entries = await fetchContentfulData('about', { limit: 1 });
  return entries.items[0]?.fields;
};

export const getContactContent = async () => {
  const entries = await fetchContentfulData('contactPage', { limit: 1, include: 2 });
  const pageContent = entries.items[0]?.fields as any;

  if (!pageContent || !pageContent.infoItems) {
    return { ...pageContent, info: [] };
  }
  
  const infoItems = (pageContent.infoItems as Entry[]).map((item: Entry) => item.fields);

  return { ...pageContent, info: infoItems };
};

export const getFooterContent = async () => {
  const entries = await fetchContentfulData('footer', { limit: 1 });
  return entries.items[0]?.fields;
};

export const getLegalPageBySlug = async (slug: string) => {
    const entries = await fetchContentfulData('legalPage', {
        'fields.slug': slug,
        limit: 1,
    });
    return entries.items[0]?.fields;
};
