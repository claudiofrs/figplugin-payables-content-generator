// List of items to randomize from
const merchantList = [
  "Salesforce",
  "SAP",
  "Oracle",
  "IBM",
  "HubSpot",
  "Workday",
  "Slack",
  "Zoom",
  "ServiceNow",
  "Atlassian",
  "Asana",
  "ADP",
  "Mailchimp",
  "Zendesk",
  "Okta",
  "Trello",
  "DocuSign",
  "Deloitte",
  "PwC",
  "KPMG",
  "EY",
  "McKinsey",
  "Capgemini",
  "Accenture",
  "Snowflake",
  "MongoDB",
  "Splunk",
  "Palantir",
  "Dropbox Business",
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "DigitalOcean",
  "Twilio",
  "Square",
  "Stripe",
  "Shopify Plus",
  "Expensify",
  "Coupa",
  "NetSuite",
  "Infor",
  "Alteryx",
  "Elastic",
  "Cisco",
  "CrowdStrike",
  "Palo Alto Networks",
  "VMware",
  "Intel",
  "Cisco Meraki",
  "Box",
];

// Function to get a random item from the list
function getRandomItem() {
  console.log("plugin ran")
  return merchantList[Math.floor(Math.random() * merchantList.length)];
}

// Main function that runs when the plugin command is triggered
async function generateRandomText() {
  const selection = figma.currentPage.selection;

  if (selection.length === 0) {
    figma.notify("Please select at least one text layer.");
    figma.closePlugin();
    return;
  }

  // Iterate over selected layers and update text layers only
  for (const node of selection) {
    if (node.type === "TEXT") {
      // Load the font before modifying the text
      await figma.loadFontAsync(node.fontName);

      // Update the text content with a random item
      node.characters = getRandomItem();
    }
  }

  figma.notify("Text updated with random content.");
  figma.closePlugin();
}

// Execute the main function
generateRandomText();
