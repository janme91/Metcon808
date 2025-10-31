import React from 'react';

const DatenschutzPage: React.FC = () => {
  return (
    <div className="bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-lg text-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Diese Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Verantwortliche Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
          [Jan Mettang]<br />
          [Musterstraße 1]<br />
          [12345 Musterstadt]<br />
          Telefon: [Ihre Telefonnummer]<br />
          E-Mail: [Ihre E-Mail-Adresse]
        </p>
      </div>
    </div>
  );
};

export default DatenschutzPage;
