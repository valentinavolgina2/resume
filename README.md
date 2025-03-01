# My Resume

**My Resume** is a personal website showcasing my resume, projects, and professional journey. The website is live at [www.valtinadev.com](https://www.valtinadev.com/). It is built with React and deployed to AWS using S3 for file storage and Route 53 for hosting. This project is designed to be cost-effective by storing all information in JSON files located in the `public/data` folder, eliminating the need for a database.

## Features

- **Home Page**: Provides an introduction and highlights my main project-startup, which I tech-led for 2.5 years.
- **Resume Page**: Displays my work experience, education, technical skills, awards, and certifications.
- **Projects Page**: Lists my personal projects with links to their GitHub repositories and live websites.
- **Social Links**: Direct links to my LinkedIn and GitHub profiles.
- **Resume Download**: Users can download my latest resume in PDF format.
- **Contact**: Users can connect with me via their default mail client.

## Installation

To run the project locally, follow these steps:

### Prerequisites

- Node.js (>=14.x recommended)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-resume.git
   cd my-resume
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Dependencies

This project uses the following dependencies:

```json
"dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3",
    "react-router-hash-link": "^2.4.3",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
}
```

## Deployment

The website is deployed to AWS:

- **S3**: Used for file storage and hosting static assets.
- **Route 53**: Manages the domain name and routes traffic to the S3-hosted website.

## Project Structure

```
my-resume/
│-- public/
│   ├── data/               # JSON files storing resume, projects, and other static data
│   ├── images/             # Project images and logos
│   ├── index.html          # Main HTML file
│-- src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Home, Resume, and Projects pages
│   ├── scripts/            # Project JavaScript files
│   ├── styles/             # Project CSS files
│   ├── App.js              # Main application file
│-- package.json            # Project dependencies and scripts
│-- README.md               # Project documentation
```

---

For any questions or suggestions, feel free to reach out via [www.valtinadev.com](https://www.valtinadev.com/) or connect on LinkedIn!
