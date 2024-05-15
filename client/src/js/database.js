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

// TODO: Add logic to a method that accepts some content and adds it to the database
// Function to add content to the database
export const putDb = async (content) => {
  // Open the indexedDB database named 'jate' with version 1
const db = await openDB('jate', 1);
// Start a new transaction with readwrite mode on the 'jate' object store
const tx = db.transaction('jate', 'readwrite');
// Get the 'jate' object store from the transaction
const store = tx.objectStore('jate');
// Put the data into the 'jate' object store with id 1 and the provided content
const request = store.put({ id: 1, value: content });
// Wait for the put operation to complete and store the result
const result = await request;
// Log a message indicating that the content was saved to the database, along with the result
console.log('Content saved to database', result);

};

// TODO: Add logic for a method that gets all the content from the database

// Function to retrieve content from the database
export const getDb = async () => {
  // Open the indexedDB database named 'jate' with version 1
const jateDb = await openDB('jate', 1);
// Start a new transaction with readonly mode on the 'text' object store
const tx = jateDb.transaction('text', 'readonly');
// Get the 'text' object store from the transaction
const store = tx.objectStore('text');
// Retrieve the data with id 1 from the 'text' object store
const request = store.get(1);
// Wait for the get operation to complete and store the result
const result = await request;
// Log a message indicating that the text was retrieved from the database, along with the result
console.log('Text retrieved', result);
// Return the content retrieved from the database
return result.content;


};

initdb();
