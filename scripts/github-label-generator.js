/**
 * script that can be used to generate all labels mentioned in repo README
 * Note: Most of this script was auto-generated by Chad. haven't yet tried it
 */

const token = process.env['GH_TOKEN']; // Replace with your GitHub token
const owner = process.env['GH_OWNER']; // Replace with the owner of the repository
const repo = process.env['GH_REPO']; // Replace with the name of the repository

const labels = [
  { "name": "dsa", "color": "7FDBFF", "description": "Cryptographic Digital Signature Algorithms" },
  { "name": "key-mgmt", "color": "0074D9", "description": "Key Management" },
  { "name": "did:web", "color": "2ECC40", "description": "did:web" },
  { "name": "did:jwk", "color": "FFDC00", "description": "did:jwk" },
  { "name": "did:dht", "color": "FF851B", "description": "did:dht" },
  { "name": "did:key", "color": "F012BE", "description": "did:key" },
  { "name": "did:ion", "color": "B10DC9", "description": "did:ion" },
  { "name": "did-doc-validation", "color": "3D9970", "description": "DID Document & Resolution Validation" },
  { "name": "w3c-vc-dm-1.1", "color": "39CCCC", "description": "W3C Verifiable Credential Data Model 1.1" },
  { "name": "w3c-vc-dm-2.0", "color": "01FF70", "description": "W3C Verifiable Credential Data Model 2.0" },
  { "name": "sd-jwt", "color": "85144B", "description": "SD-JWT / SD-JWT-VC" },
  { "name": "pd-v2", "color": "F9A602", "description": "Presentation Definition V2" },
  { "name": "tbdex-message", "color": "70DB93", "description": "tbDEX Message" },
  { "name": "tbdex-resource", "color": "5B2C6F", "description": "tbDEX Resource" },
  { "name": "tbdex-offering", "color": "E59866", "description": "tbDEX Offering Resource" },
  { "name": "tbdex-rfq", "color": "1F618D", "description": "tbDEX RFQ Message" },
  { "name": "tbdex-quote", "color": "186A3B", "description": "tbDEX Quote Message" },
  { "name": "tbdex-order", "color": "28B463", "description": "tbDEX Order Message" },
  { "name": "tbdex-orderstatus", "color": "D68910", "description": "tbDEX Order-Status Message" },
  { "name": "tbdex-close", "color": "34495E", "description": "tbDEX Close Message" }
]


async function createLabels() {
  for (const label of labels) {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/labels`, {
        method: 'POST',
        body: JSON.stringify(label),
        headers: {
          'Authorization': `token ${token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      });

      const responseBody = await response.json()

      if (response.ok) {
        console.log(`Created label: ${label.name}`);
      } else {
        console.log(`(${response.status}) Failed to create label: ${label.name}. Error: ${JSON.stringify(responseBody)}`);
      }
    } catch (error) {
      console.error(`Failed not create label: ${label.name}. Error: ${e.message}`);
    }
  }
}

await createLabels();