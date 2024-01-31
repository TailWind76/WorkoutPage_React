import arrow from '../assets/arrow.svg'
const WorkoutList = [
    {
      "id": 1,
      "title": "Workout at Home",
      "videos": 3
    },
    {
      "id": 2,
      "title": "Stay Strong and Fit",
      "videos": 2
    },
    {
      "id": 3,
      "title": "High Intensity",
      "videos": 4
    },
    {
      "id": 4,
      "title": "Simple Workout",
      "videos": 5
    }
  ];
  
  const FintesPlan = ({ id, title, videos }) => {
    return (
      <section className="fitnesPlan">
        <div className="fitnesPlan_item">
          <span className="fitnesPlan_item_number">{id}</span>

            <div className="fitnesPlan_item_description">
             <span className="fintesPlan_item__title"> <p>{title}</p></span>
             <span className="fintesPlan_item__video"><p> {videos} videos </p></span>
             </div>

             <span className='arrow-next'><img src={arrow}></img></span>
        </div>
      </section>
    );
  };
  
  const FitnessPlans = () => {
    return (
      <div>
        {WorkoutList.map((workout) => (
          <FintesPlan
            key={workout.id}
            id={workout.id}
            title={workout.title}
            videos={workout.videos}
          />
        ))}
      </div>
    );
  };
  
  export default FitnessPlans;
  