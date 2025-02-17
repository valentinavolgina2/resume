import React from "react";
import "../styles/styles.css";
import "../styles/text.css";
import "../styles/spacing.css";
import "../styles/color.css";

import "../scripts/main.js";

export default function SeattleSunSeeker() {
  return (
    <div className="featured-article">
      <p className="text-p text-light mb">
        A web application that helps discover outdoor activity locations in
        Washington State based on their preferred weather conditions.
      </p>
      <div className="featured-article-link-container my-xl">
        <a
          className="featured-article-button px-lg py"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.seattlesunseeker.com/"
        >
          <img
            className="featured-article-logo"
            src="images/web.svg"
            alt="web logo"
          />
          <span className="text-light text-p ml">Website</span>
        </a>
      </div>

      <div className="image-box mb">
        <img src="/images/weather.PNG" alt="" />
      </div>

      <div className="featured-content-wrapper">
        <div id="featured-content">
          <h2 id="about" className="title-h2 text-white mt-xl mb text-blue">
            About
          </h2>
          <p className="text-p text-light mb-lg">
            Users can select a location, specify a search radius, choose a date,
            and set their ideal weather criteria. The app then displays suitable
            destinations within the chosen distance that meet the specified
            weather conditions for the selected day and time. No more switching
            between weather and outdoor activity apps — everything is seamlessly
            integrated in one place.
          </p>

          <h2
            id="how-it-started"
            className="title-h2 text-white mt-xl mb text-blue"
          >
            How It Started
          </h2>
          <p className="text-p text-light mb">
            After completing my associate degree in Computing and Software
            Development, I wanted to build a solid project for my resume while
            gaining more hands-on development experience beyond what I had
            learned in college.
          </p>
          <p className="text-p text-light mb">
            At the time, I was hiking or camping every week, taking full
            advantage of Washington State’s breathtaking nature. However,
            planning these trips was always a hassle — I would find a promising
            location, check the weather, and discover it was raining. Then, I’d
            search for another spot, only to encounter the same issue. After
            several frustrating iterations, I’d finally settle on a hike without
            rain. This process became especially tedious during Seattle’s rainy
            winters.
          </p>
          <p className="text-p text-light mb">
            When deciding on a project to build, I realized I could solve this
            problem with a web application that not only maps outdoor locations
            but also displays weather conditions for those places on the same
            map.
          </p>
          <p className="text-p text-light mb">
            A friend, a QA specialist I was practicing LeetCode with, decided to
            join me on the project, and she introduced a UX design student who
            also wanted a portfolio-worthy project. With that, our team was
            formed. As the Tech Lead and main developer, I was responsible for
            planning, making key technical decisions, managing development
            timelines, and implementing the core functionality of the
            application.
          </p>

          <h2
            id="tech-stack-used"
            className="title-h2 text-white mt-xl mb text-blue"
          >
            Tech Stack Used
          </h2>
          <p className="text-p text-light mb">
            MERN stack… well, almost—this project doesn't use React. To
            implement a three-tier architecture, I use HTML, CSS, and JavaScript
            for the front end, Express and Node.js for the back end, and MongoDB
            along with Cloudinary for data storage. I chose not to use any
            additional front end frameworks since that would have increased
            development time. Instead, I focused on learning Node.js, Express,
            and MongoDB.
          </p>

          <h3 id="front-end" className="title-h3 text-white mt-xl text-purple">
            Front End
          </h3>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">HTML5 and CSS3</strong>: used to
              build the user interface.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Bootstrap</strong>: was extremely
              helpful and made styling much easier.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">AJAX</strong>: used for location
              edit form submission and reading messages.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Responsive Design</strong>: we
              created separate layouts for mobile and desktop devices. This was
              especially important for the main page with the map, as it
              contains numerous control elements.
            </li>
          </ul>

          <h3 id="back-end" className="title-h3 text-white mt-xl text-purple">
            Back End
          </h3>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">Node.js</strong>: used to build the
              back end. This was my first time working with Node.js, so it
              served as an introduction to the technology.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Express</strong>: used to create
              routes and fetch the necessary data from various endpoints.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Bull</strong>: used for scheduling
              background jobs.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">SSE</strong>: used for real-time
              notifications.
            </li>
          </ul>

          <h3 id="database" className="title-h3 text-white mt-xl text-purple">
            Database
          </h3>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">MongoDB</strong>: serves as the
              primary database, storing all information about places, users,
              reviews, and messages. I chose a document-based database to speed
              up development and store all data related to a place in a single
              document. This minimized querying since most of the time, I needed
              to retrieve all information about a location anyway. Additionally,
              I wanted to gain hands-on experience with NoSQL databases, and
              this project was a great opportunity to do so.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Cloudinary</strong>: used for image
              storage. It was a great choice because it's free and easy to use.
              To optimize storage, I implemented automatic image resizing upon
              upload.
            </li>
          </ul>

          <h3 id="api" className="title-h3 text-white mt-xl text-purple">
            API
          </h3>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">OpenWeather</strong>: used to
              access forecasts and government weather alerts in JSON format.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">MapBox</strong>: used to visualize
              outdoor locations on a cluster map.
            </li>
          </ul>

          <h3 id="cache" className="title-h3 text-white mt-xl text-purple">
            Cache
          </h3>
          <p className="text-p text-light">
            I implemented{" "}
            <strong className="text-white">
              client-side caching for static files
            </strong>{" "}
            and used <strong className="text-white">Redis</strong> for
            server-side caching of{" "}
            <strong className="text-white">dynamic content</strong>. Caching
            significantly improved map page loading times, as the query
            retrieving all locations with weather forecasts was
            resource-intensive.
          </p>

          <h2 id="security" className="title-h2 text-white mt-xl mb text-blue">
            Security
          </h2>
          <p className="text-p text-light mb">
            I implemented secure authentication and authorization, including
            email verification, to protect user data and control access to
            application features.
          </p>
          <p className="text-p text-light">
            To manage user-submitted content, I added a preview component that
            allows moderators to review any changes before they are applied to
            the database. This ensures that only approved modifications to
            places are added or edited, enhancing data integrity and security.
          </p>

          <h2
            id="challenges"
            className="title-h2 text-white mt-xl mb text-blue"
          >
            Challenges
          </h2>
          <h3
            id="openweather-api-pricing"
            className="title-h3 text-white mt-xl mb text-purple"
          >
            OpenWeather API Pricing
          </h3>
          <p className="text-p text-light mb">
            Since our team had no funding, we tried to avoid spending money on
            services we could get for free.
          </p>
          <p className="text-p text-light mb">
            OpenWeather provided the following free options:
          </p>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">OneCall API 3.0</strong>: 1,000 API
              calls per day, hourly forecasts for 48 hours, and daily forecasts
              for 8 days.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                Current Weather and Forecasts
              </strong>
              : 60 calls per minute, 1,000,000 calls per month, and 3-hour
              forecasts for 5 days.
            </li>
          </ul>

          <p className="text-p text-light mb">
            The second option seemed promising because it offered a high number
            of API calls per month. With 4,000 locations on our website
            (matching the number of locations on WTA), we could update each
            location up to seven times a day.
          </p>
          <p className="text-p text-light mb">
            However, we needed{" "}
            <strong className="text-white">hourly forecasts</strong> for at
            least the first 48 hours, as weather conditions could change
            quickly. This requirement forced us to choose the first option,
            which limited us to{" "}
            <strong className="text-white">1,000 calls per day</strong>. Since
            we initially had only 100 locations and didn't expect rapid growth,
            this was manageable. With 200 locations, we could update the weather{" "}
            <strong className="text-white">5 times a day</strong>, which was
            sufficient. We planned to adjust the update frequency or pay for
            additional API calls as the number of locations grew.
          </p>

          <h3
            id="weather-api-calls-optimization"
            className="title-h3 text-white mt-xl mb text-purple"
          >
            Weather API Calls Optimization
          </h3>
          <p className="text-p text-light mb">
            Since our web app focused on finding outdoor locations with good
            weather, we needed to show forecasts for each location. The
            forecasts were displayed in two places: the main map and the
            location card. Making an API call every time a user opened a
            location card would be costly and inefficient. Additionally,
            displaying forecasts on the map required minimizing costs and
            response times.
          </p>
          <p className="text-p text-light mb">
            The obvious solution was to{" "}
            <strong className="text-white">
              store weather data in a database
            </strong>{" "}
            and update it automatically in the background.
          </p>
          <h4 className="title-h4 text-white mt-xl mb text-orange">
            First Attempt: Using Node.js Timers
          </h4>
          <p className="text-p text-light mb">
            My initial approach was to use the built-in timers module (
            <span className="code-text text-contrast">setTimeout</span> and{" "}
            <span className="code-text text-contrast">setInterval</span>). While{" "}
            <span className="code-text text-contrast">setInterval</span> seemed
            ideal for periodic weather updates, using{" "}
            <strong className="text-white">nested</strong>{" "}
            <span className="code-text text-contrast">setTimeout</span> provided
            more precise control over execution delays. This ensured a fixed
            delay between API calls, which was crucial when calculating how many
            updates we could afford per day. It also prevented new API calls
            from being made before the previous one had finished.
          </p>
          <p className="text-p text-light mb">However, there were downsides:</p>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              If the{" "}
              <strong className="text-white">Node.js process stopped</strong>,
              the timers would not run.
            </li>
            <li className="my-sm text-light">
              <span className="code-text text-contrast">setTimeout</span> wasn't
              robust enough for handling scheduled jobs with{" "}
              <strong className="text-white">monitoring and retries</strong>.
            </li>
          </ul>

          <h4 className="title-h4 text-white mt-xl mb text-orange">
            Switching to a Job Scheduler
          </h4>
          <p className="text-p text-light mb">
            When we needed to add{" "}
            <strong className="text-white">more scheduled jobs</strong>, such as
            email queues and database cleanup, I searched for a more{" "}
            <strong className="text-white">reliable solution</strong>. This led
            me to explore{" "}
            <strong className="text-white">job scheduler libraries</strong>.
            After evaluating several options, I ultimately chose{" "}
            <strong className="text-white">Bull</strong> (explained below).
          </p>

          <h3
            id="background-jobs"
            className="title-h3 text-white mt-xl text-purple"
          >
            Background Jobs
          </h3>
          <p className="text-p text-light mb">
            As our web application grew, we needed scheduled background jobs for
            the following tasks:
          </p>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">
                Fetch Weather API Data Every 2 Minutes
              </strong>
              : uses repeatable jobs.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                Send Emails for Registration & Password Reset
              </strong>
              : queue-based, ensuring ordered delivery with retries.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Notification System</strong> (for
              reviewing location changes): queue-based.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Daily Database Cleanup</strong>{" "}
              (removing locations marked for deletion): runs at midnight using a
              cron job.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Monitoring Dashboard</strong>: job
              statuses tracking.
            </li>
          </ul>

          <p className="text-p text-light mb">
            In the table below compares Bull, Agenda.js, Node-Cron, Bree.js,
            node-schedule, and Bee-Queue.
          </p>

          <div id="job-libraries-table" className="my-lg">
            <table className="text-p text-light text-center">
              <thead>
                <tr>
                  <th className="text-left text-white">Feature</th>
                  <th className="text-white">Bull</th>
                  <th className="text-white">Agenda.js</th>
                  <th className="text-white">Node-Cron</th>
                  <th className="text-white">Bree.js</th>
                  <th className="text-white">node-schedule</th>
                  <th className="text-white">Bee-Queue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Job Queuing
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                    <span>(Redis)</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                    <span>(MongoDB)</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-yes">Yes</span>
                    <span>(Redis)</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Job Persistence
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                    <span>(Redis)</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                    <span>(MongoDB)</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-yes">Yes</span>
                    <span>(Redis)</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Retries on Failure
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-yes">Yes</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Repeatable Jobs
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                    <span>(Cron)</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-yes">Yes</span>
                    <span>(Cron)</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-yes">Yes</span>
                    <span>(Cron)</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-yes">Yes</span>
                    <span>(Cron)</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-no">No</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Monitoring UI
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                    <span>(Bull Board, Arena)</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-no">No</span>
                    <span>(Needs third-party tool)</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-no">No</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Good for API Polling (Every 2 min)?
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                    <span>(Slower)</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-no">No</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Good for Email & Messaging?
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-no">No</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-yes">Yes</span>
                  </td>
                </tr>

                <tr>
                  <td data-title="Feature" className="text-left text-white">
                    Good for Cron Jobs (Daily Cleanup)?
                  </td>
                  <td data-title="Bull">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Agenda.js">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Node-Cron">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Bree.js">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="node-schedule">
                    <span className="text-yes">Yes</span>
                  </td>
                  <td data-title="Bee-Queue">
                    <span className="text-no">No</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-p text-light mb">
            After reviewing the libraries mentioned above, I chose{" "}
            <strong className="text-white">Bull</strong> because:
          </p>
          <ul className="my text-p text-white tech-stack-ul ml-lg">
            <li className="my-sm text-light">
              It <strong className="text-white">integrates with Redis</strong>,
              which I was already using for caching.
            </li>
            <li className="my-sm text-light">
              It supports{" "}
              <strong className="text-white">
                job queuing, retries, and persistence.
              </strong>
            </li>
            <li className="my-sm text-light">
              It has a{" "}
              <strong className="text-white">
                monitoring dashboard (Bull Board).
              </strong>
            </li>
            <li className="my-sm text-light">
              It handles{" "}
              <strong className="text-white">high-frequency jobs</strong> (such
              as API polling every 2 minutes).
            </li>
            <li className="my-sm text-light">
              It supports <strong className="text-white">delayed jobs</strong>{" "}
              (for scheduling emails and messages).
            </li>
          </ul>

          <h3
            id="location-data-editing"
            className="title-h3 text-white mt-xl mb text-purple"
          >
            Location Data Editing
          </h3>
          <p className="text-p text-light mb">
            Allowing users to edit outdoor location data posed challenges —
            submitted changes could be inaccurate, irrelevant, spammy, or even
            inappropriate. To maintain data quality, I implemented a review
            system where all user-submitted changes required moderator approval
            before going live.
          </p>

          <h4 className="title-h4 text-white mt-xl mb text-orange">
            MongoDB Collections
          </h4>
          <p className="text-p text-light mb">
            I created the following collections in MongoDB:
          </p>
          <ol className="my text-p text-white ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">
                <span className="code-text text-contrast">Location</span>{" "}
                Collection.
              </strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  Stores the <strong className="text-white">official</strong>{" "}
                  version of each outdoor location.
                </li>
                <li className="my-sm text-light">
                  This is the{" "}
                  <strong className="text-white">
                    main, approved dataset.
                  </strong>
                </li>
                <li className="my-sm text-light">
                  Users{" "}
                  <strong className="text-white">
                    cannot directly modify this collection
                  </strong>
                  . Instead, they submit change requests.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                <span className="code-text text-contrast">Suggestion</span>{" "}
                Collection.
              </strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  Each document represents a{" "}
                  <strong className="text-white">
                    set of proposed changes
                  </strong>{" "}
                  to a location.
                </li>
                <li className="my-sm text-light">
                  <strong className="text-white">
                    Moderators review this collection
                  </strong>{" "}
                  to approve or reject changes.
                </li>
                <li className="my-sm text-light">
                  Once a suggestion is{" "}
                  <strong className="text-white">approved</strong>, the changes
                  are applied to{" "}
                  <span className="code-text text-contrast">Location</span>, and
                  the{" "}
                  <span className="code-text text-contrast">Suggestion</span> is
                  marked{" "}
                  <span className="code-text text-contrast">approved</span>.
                </li>
                <li className="my-sm text-light">
                  If <strong className="text-white">rejected</strong>, a
                  moderator comment explains the decision.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                <span className="code-text text-contrast">Change</span>{" "}
                Collection.
              </strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  Stores{" "}
                  <strong className="text-white">
                    moderator-approved changes
                  </strong>{" "}
                  separately for historical tracking.
                </li>
                <li className="my-sm text-light">
                  Provides{" "}
                  <strong className="text-white">history tracking</strong>: If
                  needed, you can <strong className="text-white">undo</strong>{" "}
                  changes.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                <span className="code-text text-contrast">Notification</span>{" "}
                Collection.
              </strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  Stores{" "}
                  <strong className="text-white">messages sent to users</strong>{" "}
                  about the{" "}
                  <strong className="text-white">
                    status of their suggestions
                  </strong>
                  .
                </li>
              </ul>
            </li>
          </ol>

          <div className="px-lg py-lg bg-light mt-xl mongodb-collection-grid text-small">
            <div className="mongodb-collection-box text-dblue bg-light px-sm py-sm">
              <span className="code-text">location</span> <span>document</span>
              <div className="mongodb-collection code-text bg-light px-xs py-xs">
                <p className="text-left">{"{"}</p>
                <p className="px">_id: &lt;ObjectId1&gt;,</p>
                <p className="px">title: "Example Park",</p>
                <p className="px">description: "A great place for hiking.",</p>
                <p className="px">links: [</p>
                <p className="px-lg">"https://example1.com",</p>
                <p className="px-lg">"https://example2.com"</p>
                <p className="px">]</p>

                <p className="px">...more fields...</p>
                <p className="px">
                  lastUpdated: ISODate("2025-02-08T12:00:00Z"),
                </p>
                <p className="px">status: "active"</p>
                <p className="text-left">{"}"}</p>
              </div>
            </div>

            <div className="mongodb-collection-box text-dblue bg-light px-sm py-sm">
              <span className="code-text">suggestion</span>{" "}
              <span>document</span>
              <div className="mongodb-collection code-text bg-light px-xs py-xs">
                <p className="text-left">{"{"}</p>
                <p className="px">_id: &lt;ObjectId2&gt;</p>
                <p className="px">location_id: &lt;ObjectId1&gt;,</p>
                <p className="px">user_id: &lt;ObjectId0&gt;,</p>
                <p className="px">
                  submittedAt: ISODate("2025-02-08T12:30:00Z"),
                </p>
                <p className="px">status: "pending",</p>
                <p className="px">changes: [</p>
                <p className="px-lg">{"{"}</p>
                <p className="px-xl">field: "title",</p>
                <p className="px-xl">value: "Suggested Park Name",</p>
                <p className="px-lg">{"}"},</p>
                <p className="px-lg">{"{"}</p>
                <p className="px-xl">field: "description",</p>
                <p className="px-xl">value: "Suggested description text.",</p>
                <p className="px-lg">{"}"},</p>
                <p className="px">],</p>
                <p className="px">
                  moderatorComment: null // filled if rejected
                </p>
              </div>
            </div>

            <div className="mongodb-collection-box text-dblue bg-light px-sm py-sm">
              <span className="code-text">change</span> <span>document</span>
              <div className="mongodb-collection code-text bg-light px-xs py-xs">
                <p className="text-left">{"{"}</p>
                <p className="px">_id: &lt;ObjectId2&gt;</p>
                <p className="px">location_id: &lt;ObjectId1&gt;,</p>
                <p className="px">suggestion_id: &lt;ObjectId2&gt;,</p>
                <p className="px">moderator_id: &lt;ObjectId0&gt;,</p>
                <p className="px">
                  approvedAt: ISODate("2025-02-08T12:30:00Z"),
                </p>
                <p className="px">status: "pending",</p>
                <p className="px">changes: [</p>
                <p className="px-lg">{"{"}</p>
                <p className="px-xl">field: "title",</p>
                <p className="px-xl">oldValue: "Old Park Name",</p>
                <p className="px-xl">newValue: "New Park Name",</p>
                <p className="px-lg">{"}"},</p>
                <p className="px-lg">{"{"}</p>
                <p className="px-xl">field: "description",</p>
                <p className="px-xl">oldValue: "Old description text.",</p>
                <p className="px-xl">newValue: "New description text",</p>
                <p className="px-lg">{"}"},</p>
                <p className="px">]</p>
              </div>
            </div>

            <div className="mongodb-collection-box text-dblue bg-light px-sm py-sm">
              <span className="code-text">notification</span>{" "}
              <span>document</span>
              <div className="mongodb-collection code-text bg-light px-xs py-xs">
                <p className="text-left">{"{"}</p>
                <p className="px">_id: &lt;ObjectId4&gt;,</p>
                <p className="px">user_id: &lt;ObjectId0&gt;,</p>
                <p className="px">
                  message: "Your suggestion for 'Example Park' was approved!",
                </p>
                <p className="px">
                  createdAt: ISODate("2025-02-08T12:00:00Z"),
                </p>
                <p className="px">read: false</p>
                <p className="text-left">{"}"}</p>
              </div>
            </div>
          </div>

          <h4 className="title-h4 text-white mt-xl mb text-orange">
            How Does This Work in Practice?
          </h4>

          <ol className="my text-p text-white ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white">User Submits a Change</strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  A user wants to update the title and description of "Example
                  Park".
                </li>
                <li className="my-sm text-light">
                  A new{" "}
                  <span className="code-text text-contrast">Suggestion</span>{" "}
                  document is created with a{" "}
                  <strong className="text-white">pending</strong> status.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">
                Moderator Reviews the Suggestion
              </strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  If <strong className="text-white">approved</strong>, the{" "}
                  <span className="code-text text-contrast">Suggestion</span>{" "}
                  status is set to{" "}
                  <span className="code-text text-contrast">approved</span>, a
                  new <span className="code-text text-contrast">Change</span>{" "}
                  document is created, and the{" "}
                  <span className="code-text text-contrast">Location</span>{" "}
                  collection is updated.
                </li>
                <li className="my-sm text-light">
                  If <strong className="text-white">rejected</strong>, the{" "}
                  <span className="code-text text-contrast">Suggestion</span>{" "}
                  status is set to{" "}
                  <span className="code-text text-contrast">rejected</span> with
                  a moderator comment.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">User is Notified</strong>
              <ul className="my text-p text-white tech-stack-ul ml-lg">
                <li className="my-sm text-light">
                  A notification is sent informing the user about the decision.
                </li>
              </ul>
            </li>
          </ol>

          <h3
            id="new-message-notification"
            className="title-h3 text-white mt-xl mb text-purple"
          >
            Notification System
          </h3>
          <p className="text-p text-light mb">
            When a moderator approves or rejects a user’s location suggestion, a
            message containing the moderator’s comments is sent to the user. I
            wanted the user to receive a{" "}
            <strong className="text-white">real-time notification</strong>{" "}
            indicating they had a new message.
          </p>
          <p className="text-p text-light mb">
            To handle this, I used a message queue (Bull) to process messages
            and send emails asynchronously. All messages, including their "read"
            status, are stored in the{" "}
            <span className="code-text text-contrast">Notification</span>{" "}
            collection. For real-time notifications, I chose{" "}
            <strong className="text-white">Server-Sent Events (SSE)</strong>
            to push message notifications and{" "}
            <strong className="text-white">WebSockets</strong> to fetch unread
            messages when the user first opens the website.
          </p>

          <p className="text-p text-light mb">
            SSE was the obvious choice because it did exactly what I needed — it
            uses a unidirectional connection to push notifications from the
            server to the client. However, there was one problem: SSE alone
            <strong className="text-white">
              doesn’t persist unread notifications
            </strong>{" "}
            when the user leaves and later reopens the website.
          </p>

          <p className="text-p text-white mb">What Happens in This Case?</p>

          <ol className="my text-p text-white ml-lg">
            <li className="my-sm text-light">
              The user receives a new message while on the website, and SSE
              updates the unread count in real time.
            </li>
            <li className="my-sm text-light">
              The user doesn’t read the message and closes the website.
            </li>
            <li className="my-sm text-light">
              Later, when the user reopens the website, SSE establishes a new
              connection. But since SSE only streams live updates, it doesn’t
              automatically retrieve past unread messages.
            </li>
          </ol>

          <p className="text-p text-white mb">
            How to Ensure Unread Messages Persist?
          </p>
          <ol className="my text-p text-white ml-lg">
            <li className="my-sm text-light">
              <strong className="text-white"> Use Web Sockets</strong> – When a
              user opens the website, WebSockets fetch the unread message count
              from the database.
            </li>
            <li className="my-sm text-light">
              <strong className="text-white">Use a REST API</strong> – Every
              time the user opens the website, an API request retrieves the
              unread message count.
            </li>
          </ol>

          <p className="text-p text-light mb">
            At the time, I thought WebSockets was the best choice, but looking
            back now, I realize a REST API would have been better.
          </p>

          <h4 className="title-h4 text-white mt-xl mb text-orange">
            System Workflow
          </h4>
          <ol className="my text-p text-white ml-lg">
            <li className="my-sm text-light">
              <p className="text-p text-white mb">
                Message Processing (Bull Queue)
              </p>
              <p className="text-p text-light">
                When a moderator approves or rejects a suggestion, the system:
              </p>
              <ul className="my text-p text-white ml-lg tech-stack-ul">
                <li className="my-sm text-light">
                  <strong className="text-white">Creates a new message</strong>{" "}
                  in the database.
                </li>
                <li className="my-sm text-light">
                  <strong className="text-white">
                    Adds a job to the Bull queue
                  </strong>{" "}
                  to send the message asynchronously.
                </li>
                <li className="my-sm text-light">The worker:</li>
                <ul className="text-p text-white ml-lg tech-stack-ul">
                  <li className="my-sm text-light">
                    <strong className="text-white">
                      Processes the message job.
                    </strong>
                  </li>
                  <li className="my-sm text-light">
                    <strong className="text-white">Sends an SSE event</strong>{" "}
                    to notify the user.
                  </li>
                  <li className="my-sm text-light">
                    <strong className="text-white">Sends an email</strong>{" "}
                    (optional, only if the user hasn’t read the message after a
                    delay).
                  </li>
                </ul>
              </ul>
            </li>
            <li className="my-sm text-light">
              <p className="text-p text-white">Real-Time Notifications (SSE)</p>
              <ul className="text-p text-white ml-lg tech-stack-ul">
                <li className="my-sm text-light">
                  The front end{" "}
                  <strong className="text-white">
                    listens for new messages
                  </strong>{" "}
                  via SSE.
                </li>
                <li className="my-sm text-light">
                  When the user receives a message, the unread count updates in
                  real-time.
                </li>
              </ul>
            </li>
            <li className="my-sm text-light">
              <p className="text-p text-white mb">Initial Load (WebSockets)</p>
              <p className="text-p">When a user opens the website:</p>
              <ol className="text-p text-white ml-lg tech-stack-ul">
                <li className="my-sm text-light">
                  WebSocket fetches the{" "}
                  <strong className="text-white">unread count</strong> from the
                  database.
                </li>
                <li className="my-sm text-light">
                  The unread count is displyed in the UI.
                </li>
              </ol>
            </li>
            <li className="my-sm text-light">
              <p className="text-p text-white mb">Marking Messages as Read</p>
              <p className="text-p">
                I used{" "}
                <strong className="text-white">AJAX (REST API call)</strong> to
                update the unread count when a user reads a message. However, if
                a user has{" "}
                <strong className="text-white">multiple open tabs</strong>,
                updating the unread message count in one tab should reflect in{" "}
                <strong className="text-white">all tabs</strong>. To ensure
                synchronization across all open tabs, I used{" "}
                <strong className="text-white">SSE alongside AJAX</strong>.
              </p>
              <ol className="text-p text-white ml-lg">
                <li className="my-sm text-light">
                  User clicks on an unread message.
                  <ul className="text-p text-white ml-lg tech-stack-ul">
                    <li className="my-sm text-light">
                      Sends an{" "}
                      <strong className="text-white">AJAX request</strong> to
                      mark the message as read.
                    </li>
                    <li className="my-sm text-light">
                      Backend updates the database.
                    </li>
                  </ul>
                </li>
                <li className="my-sm text-light">
                  Backend updates unread count and triggers a SSE.
                  <ul className="text-p text-white ml-lg tech-stack-ul">
                    <li className="my-sm text-light">
                      Fetches the{" "}
                      <strong className="text-white">new unread count</strong>{" "}
                      from the database.
                    </li>
                    <li className="my-sm text-light">
                      Sends a <strong className="text-white">message</strong>{" "}
                      with updated unread count to all open tabs.
                    </li>
                  </ul>
                </li>
                <li className="my-sm text-light">
                  Other tabs receive the message.
                  <ul className="text-p text-white ml-lg tech-stack-ul">
                    <li className="my-sm text-light">
                      Updates the unread count in the UI.
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
          </ol>

          <p className="text-p text-light mb"></p>
          <p className="text-p text-light mb"></p>
          <p className="text-p text-light mb"></p>
        </div>
      </div>
    </div>
  );
}
