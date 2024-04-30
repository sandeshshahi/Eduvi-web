import Search from "./Search";

const Text = () => {
  return (
    <div className="text__container">
      <span className="text-1">Never Stop Learning</span>
      <h1
        className="text-heading"
        aria-labelledby="h1 heading"
        aria-describedby="heading"
      >
        Grow up your skills by online courses with Eduvi
      </h1>
      <p
        aria-labelledby="text-description"
        aria-describedby="text-description"
        className="text-description"
      >
        Eduvi is a Global training provider based across the UK that specialises
        in accredited and bespoke training courses. We crush the barriers
        togetting a degree.
      </p>
      <Search />
    </div>
  );
};
export default Text;
