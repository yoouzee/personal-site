/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Singapore Land Authority',
    position: 'Senior Geospatial Engineer',
    url: 'https://www.sla.gov.sg',
    startDate: '2023-09-11',
    summary: 'SLA drives adoption of geospatial technology by fostering a collaborative environment that encourages innovation, knowledge sharing and value creation among public agencies, private enterprises and the community.',
    highlights: [
      'Drive strategy to build geomatics and geospatial capabilities in Singapore',
    ],
  },
];

export default work;
