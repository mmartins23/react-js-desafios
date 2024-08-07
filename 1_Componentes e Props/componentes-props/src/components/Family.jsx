import Profile from "./Profile";

const Family = ({ members }) => {
  return (
    <>
      {members.map(member => (
        <Profile
          key={member.name}
          name={member.name}
          age={member.age}
          job={member.job} />
      ))}
    </>
  )
}

export default Family;