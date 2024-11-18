// List of items to randomize from

const expenseCategories = [
  "Office Supplies",
  "Employee Benefits",
  "Travel and Transportation",
  "Marketing and Advertising",
  "Software Subscriptions",
  "Professional Services",
  "Legal and Compliance",
  "Training and Development",
  "IT Infrastructure",
  "Cloud Services",
  "Utilities and Internet",
  "Default",
  "Facilities Management",
  "Consulting Fees",
  "R&D Expenses",
  "SaaS Subscriptions",
  "Recruitment Costs",
  "Corporate Gifts",
  "Event Management",
  "Vendor Payments",
  "Freight and Shipping",
  "Inventory Procurement",
];

const budgetList = [
  "Operating",
  "Marketing",
  "IT",
  "HR",
  "Training",
  "Travel",
  "R&D",
  "Sales",
  "Product Development",
  "Customer Support",
  "Facilities",
  "Logistics",
  "Procurement",
  "Legal",
  "Compliance",
  "Event",
  "Social Media",
  "Content",
  "E-commerce",
  "Branding",
  "Community Engagement",
  "Employee Benefits",
  "Recruitment",
  "Performance Management",
  "Corporate Social Responsibility",
  "Security",
  "Operations",
  "Quality Assurance",
  "Software",
  "Hardware",
];

const departmentList = [
  "Human Resources",
  "Finance",
  "Accounting",
  "Sales",
  "Marketing",
  "Product Development",
  "Customer Support",
  "IT Support",
  "Operations",
  "Legal",
  "Procurement",
  "Logistics",
  "Engineering",
  "R&D",
  "Business Development",
  "Administration",
  "Quality Assurance",
  "Design",
  "Data Analytics",
  "Public Relations",
  "Strategy",
  "Compliance",
  "Corporate Communications",
  "Risk Management",
  "Supply Chain",
  "Facilities",
  "Security",
  "Training and Development",
  "Investor Relations",
  "Executive Management",
  "Project Management",
  "Creative",
  "Merchandising",
  "E-commerce",
  "Social Media",
  "Community Management",
  "Partnerships",
  "Content Creation",
  "Customer Experience",
  "Field Operations",
  "Vendor Management",
  "Product Management",
  "Software Development",
  "Hardware Engineering",
  "Network Operations",
  "Enterprise Applications",
  "Mobile Development",
  "Cloud Infrastructure",
  "Legal Compliance",
  "Corporate Social Responsibility",
  "Event Planning",
  "Knowledge Management",
  "HR Operations",
  "Performance Management",
  "Technical Support",
  "Technical Sales",
  "Brand Management",
  "User Experience",
  "Field Sales",
  "Tax",
  "Treasury",
];

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

// Function to get a random item from a specified list
function getRandomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Main function that runs when the plugin command is triggered
async function generateRandomText(list = merchantList) {
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
      node.characters = getRandomItem(list);
    }
  }

  figma.notify("Text updated with random content.");
  figma.closePlugin();
}

// Example usage for `merchantList`
// Map commands to their respective lists
const commandLists = {
  "random-merchant": merchantList,
  "random-budget": budgetList,
  "random-department": departmentList,
  "random-category": expenseCategories,
};

figma.on('run', ({ command }) => {
  const list = commandLists[command];
  if (list) {
    generateRandomText(list); // Use the appropriate list based on the command
  } else {
    figma.closePlugin("Unknown command.");
  }
});