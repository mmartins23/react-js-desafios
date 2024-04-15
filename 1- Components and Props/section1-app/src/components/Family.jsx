import Profile from './Profile';

const Family = ({members}) => {
  return (
    <div>
        {members.map(member => (
            <Profile 
            name={member.name}
            age={member.age}
            job={member.job}
            />
        ))}
    </div>
  )
}

export default Family;