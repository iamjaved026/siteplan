'use client';

import React from 'react';

const ResourceCard: React.FC<{ resources: { name: string; tasks: number }[] }> = ({ resources }) => {
  return (
    <div className="res-c">
      <div className="ch">
        <div className="ct">Resource availability</div>
      </div>
      <div className="res-g">
        {resources.map((resource) => (
          <div className="res-i" key={resource.name}>
            <div>
              <div className="res-n">{resource.name}</div>
              <div className="res-t">{resource.tasks} tasks assigned</div>
            </div>
            <div className="res-a">Available</div>
          </div>
        ))}
        {resources.length === 0 && <p>No resources to display.</p>}
      </div>
    </div>
  );
};

export default ResourceCard;
