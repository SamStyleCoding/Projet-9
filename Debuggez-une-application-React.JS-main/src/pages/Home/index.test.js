import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";
import EventList from "../../containers/Events";
import EventCard from "../../components/EventCard";
import PeopleCard from "../../components/PeopleCard";
import Menu from "../../containers/Menu";
import Slider from "../../containers/Slider";
import ServiceCard from "../../components/ServiceCard";
import Form from "../../containers/Form";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});   


describe("When a page is created", () => {
  // Test pour vérifier si un Menu est affiché
  it("a Menu is displayed", () => {
    // Rendu du composant Menu
    render(<Menu />);
  })
  // Test pour vérifier si un Slider est affiché
  it("a Slider is displayed", () => {
    // Rendu du composant Slider
    render(<Slider />);
  })
  // Test pour vérifier si une liste de services est affichée
  it("a list of services is displayed", () => {
    // Rendu du composant ServiceCard avec des props et des enfants
    render(<ServiceCard 
      imageSrc="/images/priscilla-du-preez-Q7wGvnbuwj0-unsplash1.png">
      <h3>test title</h3>
    </ServiceCard>);
    expect(screen.getByText("test title")).toBeInTheDocument()
  })
  // Test pour vérifier si une liste d'événements est affichée
  it("a list of events is displayed", () => {
    // Rendu du composant EventList
    render(<EventList />);
  })
  // Test pour vérifier si une liste de personnes est affichée
  it("a list a people is displayed", () => {
    // Rendu du composant PeopleCard avec des props
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    expect(screen.getByText("test name")).toBeInTheDocument();
    expect(screen.getByText("test position")).toBeInTheDocument();
    expect(screen.getByAltText("image-alt-text")).toBeInTheDocument();
  })
  // Test pour vérifier si un formulaire est affiché
  it("a form is displayed", () => {
    // Rendu du composant Form
    render(<Form />);
  })
  // Test pour vérifier si une carte d'événement, avec le dernier événement, est affichée
  it("an event card, with the last event, is displayed", () => {
    // Rendu du composant EventCard avec des props
    render(<EventCard 
      imageSrc="http://src-image" 
      imageAlt="image-alt-text"
      title="test event"
      date={new Date("2022-04-01")}
      small
      label="test label"
    />);
    const img = screen.getByAltText("image-alt-text");
    expect(img).toHaveAttribute("src", "http://src-image");
    expect(screen.getByText("test event")).toBeInTheDocument()
    expect(screen.getByText("test label")).toBeInTheDocument()
    expect(screen.getByText("avril")).toBeInTheDocument();
  })
});
