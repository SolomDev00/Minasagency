import RehlaTabs from "../../components/tickets/rehla";

const CategorySection = () => {
  return (
    <section id="category" className="container z-50">
      <div className="flex flex-row-reverse justify-between items-center -mt-4 mb-5">
        <h3 className="text-xl font-semibold">أفكار لرحلة من مصر</h3>
      </div>
      <div>
        <RehlaTabs />
      </div>
    </section>
  );
};

export default CategorySection;
