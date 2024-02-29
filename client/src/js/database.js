import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  try {
  // Create a new document based on the Content model
  const newContent = new Content({ content: content });

  // Save the new document to the database
  const savedContent = await newContent.save();

  console.log('Content added to the database:', savedContent);
  return savedContent;
} catch (error) {
  console.error('Error adding content to the database:', error);
  throw error;
};
};


module.exports = { putDb };



export const getDb = async () => {
  try {
    // Retrieve all documents from the Content collection
    const allContent = await Content.find();

    console.log('All content retrieved from the database:', allContent);
    return allContent;
  } catch (error) {
    console.error('Error retrieving content from the database:', error);
    throw error;
  }
};

module.exports = { getDb };

initdb();
