import React from 'react';
import SectionHeader from '@common/SectionHeader';
import ExperienceContainer from './ExperienceContainer';
import ProgressRadial from './ProgressRadial';

const Experience = () => {
  return (
    <div className="flex-column w-60-ns w-100 bg-white experience pr5-l pr4 pl5-l pl4 pt5-ns pt0 pb5  bl b--light-gray">
      <div className="mb5">
        <SectionHeader name="work" className="mb4" />
        <ExperienceContainer title="work " date="2015" />
        <ExperienceContainer title="work " date="2015" />
        <ExperienceContainer title="work " date="2015" />
      </div>
      <div className="mb5">
        <SectionHeader name="Professional Skills" className="mb4" />
        <div className="flex flex-wrap justify-between-l justify-around">
          <ProgressRadial percentage="70" name="communication" />
          <ProgressRadial percentage="83" name="management" />
          <ProgressRadial percentage="90" name="team work" className="mt0-l mt3" />
          <ProgressRadial percentage="65" name="motivation" className="mt0-l mt3" />
        </div>
      </div>
      <div>
        <SectionHeader name="eductation" className="mb4" />
        <ExperienceContainer title="eductation" date="2015" />
        <ExperienceContainer title="eductation" date="2015" />
      </div>
    </div>
  );
};

export default Experience;
