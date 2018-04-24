import React from 'react';
import SectionHeader from '@common/SectionHeader';
import PersonalInfoRow from './PersonalInfoRow';
import ProgressBar from './ProgressBar';
import HobbyIcon from './HobbyIcon';
const Profile = () => {
  return (
    <div className="flex-column w-40-ns w-100 bg-white pl5-l pl4 pr5-l pr4 pv5">
      <div className="mb5">
        <SectionHeader name="Personal" className="mb2" />
        <table className="collapse tl mt0">
          <tbody>
            <PersonalInfoRow header="name" data="john doe" />
            <PersonalInfoRow header="birthday" data="01.01.1999" />
            <PersonalInfoRow header="relationship" data="single" />
            <PersonalInfoRow header="nationality" data="New Zealand" />
            <PersonalInfoRow header="language" data="English" />
            <PersonalInfoRow header="telephone" data="+(64) 21-123-456" />
          </tbody>
        </table>
      </div>

      <div className="mb5">
        <SectionHeader name="Software" className="mb4" />
        <ProgressBar name="Javascirpt" percentage={0.85} />
        <ProgressBar name="HTML" percentage={0.7} />
        <ProgressBar name="CSS" percentage={0.75} />
        <ProgressBar name="React" percentage={0.75} />
        <ProgressBar name="Vue" percentage={0.65} />
      </div>

      <div>
        <SectionHeader name="Hobbies" className="mb4" />
        <div className="flex justify-between">
          <HobbyIcon src={require('../../../img/headphones.png')} name="music" />
          <HobbyIcon src={require('../../../img/book.png')} name="read" />
          <HobbyIcon src={require('../../../img/bus.png')} name="travel" />
        </div>
        <div className="flex justify-between mt4">
          <HobbyIcon src={require('../../../img/dumbbell.png')} name="exercise" />
          <HobbyIcon src={require('../../../img/workplace.png')} name="code" />
          <HobbyIcon src={require('../../../img/bicycle.png')} name="ride" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
