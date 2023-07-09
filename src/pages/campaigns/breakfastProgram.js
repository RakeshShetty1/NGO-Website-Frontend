import img from "./PaushtikAhara.jpg";
import { Link } from "react-router-dom";

const BreakfastProgram = () => {
  return (
    <div className="desc-container text-center">
      <img src={img} className=" w-100 p-2 " alt="" />
      <div className="p-5" style={{ backgroundColor: "#ffffcc" }}>
        <h1 className="desc-title">Meals on Wheels Program</h1>
        <h2>
          <strong>Join Our Breakfast Program and Make a Difference!</strong>
        </h2>
        <p className="desc-text">
          In keeping with our vision, “To open up a world of opportunities for
          every vulnerable by ensuring food security”, we have initiated School
          Meal Programme for belonging to the migrant community. We have
          partnered with an NGO striving to bridge the education gap among
          underprivileged children with their signature programme, School on
          Wheels.
        </p>
        <h2>
          <strong>About the Breakfast Program:</strong>
        </h2>
        <p className="desc-text">
          School on Wheels is a mobile classroom created by modifying a bus with
          all learning materials including audio-visual educational tools. And
          food for children will boost attendance and bring regularity from the
          most unreached groups of out-of-school children i.e., street children
          and pavement dwellers. The bus reaches out to children in locations
          and construction sites where it is not feasible to build even a
          temporary classroom.
        </p>

        <h2>
          <strong>NEED FOR SCHOOL MEAL PROGRAMME</strong>
        </h2>
        <p className="desc-text">
          Aside from supporting education, we want to address the prevalence of
          alarmingly high malnutrition in underprivileged children. The Ministry
          of Women and Child Development estimates that as of 14 October 2021,
          there are 7.76 lakh severely acute malnourished children and 15.46
          lakh moderately acute malnourished children in India. Reportedly,
          Maharashtra has the highest number of malnourished children. The state
          registered 6.16 lakh malnourished children with 1.57 lakh severely
          acute malnourished children and 4.58 lakh severely acute malnourished
          children. 1 Malnutrition leads to poor health, delays age-appropriate
          growth, hinders physical and cognitive development, weakens the immune
          system, and also increase the risk of mortality.
        </p>

        <h2>
          <strong>SUPPORT SCHOOL MEAL PROGRAMME</strong>
        </h2>
        <p>
          Your support will have a triple impact on the beneficiary children.
          The daily lunch will take care of their nutrition, health, and also
          support their education. Donate generously so that children receive
          what they need the most for proper growth and development – nutritious
          food. We are currently serving children from the slum locations across
          Jogeshwari, Goregaon and Poisar. With you support, we plan to expand
          this initiative to two more critical locations; Pydhonie and Mankhurd.
        </p>
        <p>
          Every morning, we open our doors to individuals and families in need,
          welcoming them with warmth and kindness. They are provided with a
          nutritious breakfast that includes a variety of items, such as
          cereals, milk, fresh fruits, whole-grain bread, and more. Our aim is
          not only to provide sustenance but also to create an inclusive and
          supportive environment where everyone feels valued and cared for.
        </p>

        <h2>
          <strong>Get Involved Today!</strong>
        </h2>
        <p>
          We invite you to join us in our mission to combat hunger and nourish
          our community through the Breakfast Program. Together, we can bring
          smiles to faces, provide hope, and ensure that everyone has an equal
          opportunity to start their day with a nutritious meal.
        </p>
        <p>
          Take the first step and make a difference today. Contact us to learn
          more about volunteering, making a donation, or any other way you'd
          like to contribute. Together, let's build a hunger-free community
          where everyone thrives.
        </p>
        <br />
        <Link to="/registration">
          <input
            type="button"
            value=" &#x2764; Donate "
            className=" btn btn-lg btn-success shadow p-2 mb-3"
          />
        </Link>
      </div>
    </div>
  );
};
export default BreakfastProgram;
