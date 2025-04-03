# Dictionary App

## Overview
This project is a simple English dictionary application built with React. It allows users to search for a word and fetch its meaning, origin, pronunciation, and part of speech using the free Dictionary API.

## Features
- Search for any English word
- Retrieve word definitions, origin, and phonetics
- Play audio pronunciation
- Display word meanings categorized by part of speech

## Technologies Used
- **React**: Frontend framework
- **Axios**: HTTP client for API requests
- **Dictionary API**: Provides word definitions and phonetics
- **CSS**: Styling

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x recommended)
- npm or yarn

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/nakoyonioka/dictionary.git
   cd dictionary
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## Usage
1. Enter a word in the search bar.
2. Click "Search" to fetch its meaning.
3. View the definition, origin, part of speech, and audio pronunciation.

## Project Structure
```
├── src
│   ├── components
│   │   ├── Word.js        # Displays word information
│   ├── App.js             # Main application component
│   ├── index.js           # Entry point
│   ├── App.css            # Styling
│── public
│   ├── index.html         # Main HTML file
│── package.json           # Dependencies and scripts
```

## API Usage
- `GET /entries/en/<word>` - Fetches word definitions, phonetics, and origin

## Future Improvements
- Implement synonyms and antonyms
- Improve UI with animations and styling
- Allow users to save favorite words
- Add support for additional languages

