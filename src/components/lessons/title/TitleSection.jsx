const TitleSection = () => {
  return (
    <div className="title__section">
      <h1
        aria-labelledby=" heading title"
        aria-describedby="heading title"
        className="title__section-h1"
      >
        Qualified lessons for students
      </h1>
      <p
        aria-labelledby=" description"
        aria-describedby="description"
        className="title__section-p"
      >
        A lesson or class is a structured period of time where learning is
        intended to occur. It involves one or more students being taught by a
        teacher or instructor.
      </p>
    </div>
  );
};
export default TitleSection;
