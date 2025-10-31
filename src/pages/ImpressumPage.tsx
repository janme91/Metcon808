import React from 'react';

const ImpressumPage: React.FC = () => {
  return (
    <div className="bg-white py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto prose prose-lg text-gray-700">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
        <p>
          [Jan Mettang]<br />
          [MettCon]<br />
          [Musterstraße 1]<br />
          [12345 Musterstadt]
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Kontakt</h2>
        <p>
          Telefon: [Ihre Telefonnummer]<br />
          E-Mail: [Ihre E-Mail-Adresse]
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          [Ihre USt-IdNr.]
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p>
          [Jan Mettang]<br />
          [Anschrift wie oben]
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Haftungsausschluss (Disclaimer)</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>
      </div>
    </div>
  );
};

export default ImpressumPage;
