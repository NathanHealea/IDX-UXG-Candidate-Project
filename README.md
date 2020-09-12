# IDX UDX Candidate Project

by Nathan Healea

## Design Decision

My main focus was to ensure that the site was responsive and smoothy transition between different screens size as required by April user story. Tom wanted to be able to quickly, at-a-glance, look at listing that he was interested in. Information was displayed in a minimal fashion using icons to quickly digest information. The over all component design was to be minimal with a accent color, gree, to draw user attention to action item (ie. Map display and contact information).

## Project Details

Create a "Search Results" component using a modern frontend tech stack, such as Vue, React, Angular, etc. The search results component will be powered by a dataset provided by IDX Broker to display properties for sale.

#### **User Story**

- As Tom, an individual searching for a home on my local real estate agent's website, I want to be able to see active homes for sale based on my search criteria, at-a-glance, so that I can quickly determine if I am interested in the listing.

- As April, a local real estate agent, I want my potential leads to have as fluid of a user experience as possible. My goal is to present the listings that my visitors are interested in efficiently, and keep them interested so they reach out to me for more information on a listing.

#### **Project Requirements**

- Build a "Search Results" component

- Contains all of the listings provided in the JSON data

- Each individual listing within the set of results uses all of the associated object properties

- The layout must be responsive

- Write some basic documentation in the project's README.md file

- Explain your design decisions

- Have the code available in a GitHub repository

#### **Notes**

- Be creative with your design

- Feel free to use third party modules, maps (such as Open Street Map), CSS frameworks, etc.

#### **Data**

API endpoint: [https://next.json-generator.com/api/json/get/4JejqZvkY](https://next.json-generator.com/api/json/get/4JejqZvkY)

## Installation and Running Application

#### **Requirements**

- Node: v10.16+
- Yarn: 1.17+

#### **Installation**

Change into project directory and install node packages.

```bash
$ cd idx-udx-candidate-project
$ yarn install
```

#### **Run Application (Development Mode)**

Runs the app in the development mode.

```bash
$ yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### **Build Application**

Builds the app for production to the build folder.

```bash
$ yarn build
```

#### **Run Application (Production Mode)**

Install serve globally ` yarn global add serve`

```bash
server -s build
```
