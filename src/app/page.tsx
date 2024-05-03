import ExperienceSection from "./components/ExperienceSection";
import InfomartionSection from "./components/InfomartionSection";
import NavbarRoot from "./components/NavbarRoot";
import ProjectSection from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="container m-auto min-h-screen">
      <NavbarRoot />
      <InfomartionSection />
      <ExperienceSection />
      <ProjectSection />
      <section id="project">
        <h1>Project</h1>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus harum odit quis ab, cumque dignissimos adipisci tempore a sequi! Corporis, neque saepe. Obcaecati, quod corporis? In tempore sint dolore dignissimos?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, fuga numquam asperiores tempora error incidunt ratione minima. Maxime et, tenetur eius cum quia saepe debitis blanditiis ipsa est, quae aperiam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus facilis vel expedita omnis voluptatum, dolorum eligendi non, quis ad, dolore nam nisi illum officiis delectus repellendus modi aliquid placeat perspiciatis.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quibusdam repellat nulla vitae inventore temporibus hic harum ipsa, nesciunt quaerat velit laborum delectus, explicabo consectetur neque accusantium maxime odio optio.
      </section>
      <section id="contact">
        <h1>Contact</h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, non deleniti pariatur cumque corrupti tempore, iure harum nemo aperiam nihil velit. Adipisci laudantium voluptatem amet fugiat aperiam aspernatur voluptas soluta!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ea cumque dignissimos reprehenderit possimus ut earum incidunt doloribus nemo vero animi, voluptatibus inventore quod accusantium excepturi voluptate unde quasi. Ad?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, incidunt eos ducimus nostrum minus natus assumenda illo tempore molestiae voluptatibus magnam deleniti fugiat enim repudiandae a. Ad vero voluptatum amet?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur voluptates atque sapiente, excepturi dolorem nisi sed eligendi iusto reprehenderit itaque nam earum, velit laborum dolore nihil non ex enim?
      </section>
    </main>
  );
}
