import React from 'react';
import '../jobs.css';
import { Card } from 'react-bootstrap';

const JobSearch = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://via.placeholder.com/400x100" />

      <div class="jobsearchfix">
        <form>
          <div className="jobsearch">
            <h3>Find your next gig!</h3>
            <div class="row">
              <input
                type="text"
                class="form-control"
                placeholder="Search by Title..."
              />
              <input
                type="text"
                class="form-control"
                placeholder="Search by Location..."
              />
              <button>Search</button>
            </div>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default JobSearch;
