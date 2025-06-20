import React, { StrictMode, Component, ReactNode, cloneElement } from "react";
import { createRoot } from "react-dom/client";
import '/Users/dima/Desktop/"Summer 2025"/refresko/src/hoverButton.css';
import '/Users/dima/Desktop/"Summer 2025"/refresko/src/hoverCircle.css';
import '/Users/dima/Desktop/"Summer 2025"/refresko/src/DrinkTransitions.css';
import './index.css';

interface MyListProps {
    maxItems?: number;
    children?: React.JSX.Element | React.JSX.Element[];
}

// object
type job = {
    company: string;
    date: string;
    tagline: string;
    ingredients: string[];
    description: string;
};

const drinkImages = [
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/0.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/1.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/2.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/3.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/4.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/5.jpg'),
    require('/Users/dima/Desktop/"Summer 2025"/refresko/src/tPho/6.jpg')
];


// fill in an array with the objects
let toChooseFrom: job[] = [
    {
        company: "Kyiv Cooler",
        date: "(Coming Soon~)",
        tagline: "Inspired by warm summer evenings in Ukrainian gardens, the Kyiv Cooler is:",
        ingredients: [
            "a crisp blend of cucumber",
            "lemon",
            "mint",
            "elderflower",
            "ingredients often found in traditional home remedies and cool drinks across the country"
        ],
        description: "It’s a tribute to the simplicity and elegance of Ukrainian hospitality, where freshness and comfort go hand in hand."
    },
    {
        company: "Sunflower Fizz",
        date: "(Coming Soon~)",
        tagline: "Named after Ukraine’s national flower, the sunflower — a symbol of hope, strength, and sunshine — this drink is made with:",
        ingredients: [
            "calming chamomile",
            "bright citrus",
            "a golden splash of honey"
        ],
        description: "It captures the spirit of resilience and brightness that defines the Ukrainian countryside and its people."
    },
    {
        company: "Black Sea Breeze",
        date: "(Coming Sooon~)",
        tagline: "This bold, fruity refresher draws its name from the Black Sea coast, where juicy berries and herbal teas are staples in summer markets.",
        ingredients: [
            "Blackcurrants",
            "mint",
            "lemon",
            "fizz"
        ],
        description: "Blackcurrants and mint bring a cooling burst of flavor, balanced with lemon and fizz. It’s a nod to the seaside towns of Ukraine, full of culture, color, and breeze."
    },
    {
        company: "Kyiv Kvass Lite",
        date: "(Coming Sooon~)",
        tagline: "Kvass is a traditional fermented drink made from rye bread, beloved across Eastern Europe. This version is a tribute — light, non-fermented, and summer-friendly.",
        ingredients: [
            "toasted bread",
            "honey",
            "lemon",
            "mint"
        ],
        description: "Bringing the nostalgic taste of village life to a modern summer stand. Made with toasted bread, honey, lemon, and mint, it tells the story of preserving culture with a fresh twist."
    }
];
        
        
let stapleDrinks: job[] = [
    {
        company: "Coca-Cola",
        date: "",
        tagline: "The timeless original.",
        ingredients: ["sweet caramel notes", "crisp bubbles"],
        description: "Crisp, bubbly, and perfectly balanced with sweet caramel notes—always refreshing."
    },
    {
        company: "Sprite",
        date: "",
        tagline: "Light, lemon-lime refreshment.",
        ingredients: ["lemon", "lime"],
        description: "Light, lemon-lime refreshment with a clean, crisp finish. Great for cooling off and perking up."
    },
    {
        company: "Dr. Pepper",
        date: "",
        tagline: "A bold, unique blend.",
        ingredients: ["23 flavors", "smooth spice"],
        description: "A bold, unique blend of 23 flavors with a smooth, spiced kick. A classic favorite for those who like something a little different."
    },
    {
        company: "Fanta Orange",
        date: "",
        tagline: "Bright, fruity, and bold.",
        ingredients: ["orange flavor", "fizz"],
        description: "Bright, fruity, and bursting with bold orange flavor. A fun, fizzy treat that tastes like summer."
    }
];

class Title extends Component{
    override render(): ReactNode {

        return <header>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "25px", margin: "auto", marginBottom: "10px" }}>
                

                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "25px",margin: "auto", marginTop: "10px", marginBottom: "10px" }}>
                            
                    <div id = "logo image">

                        <img
                            src= {require('/Users/dima/Desktop/"Summer 2025"/refresko/src/logo.png')}
                            alt="Refresko Brand Logo"
                            style={{ width: 120, height: 'auto', backgroundColor: "black"}}
                        />


                    </div>




                    <span style = {{textAlign: "right", fontSize: "50px"}}>
                            
                        <h1>
                            Refresko's
                        </h1>

                    </span>





                    <nav className="hoverButton">
                        <a href="/takeMeSomewhere">Home</a>
                        <a href="https://www.google.com/" target="_blank">Instagram</a>
                        <a href="#about">About</a>
                    </nav>

                </div>
                   
            </div>

        </header>
        
    }
}

class Banner extends Component {
    override render(): ReactNode {
        return <ul>
                    <img
                        src = {require ('/Users/dima/Desktop/"Summer 2025"/refresko/src/Serving-Chill-Vibes-Refreshi-6-18-2025.gif')}
                        alt="Refresko Banner"
                        style={{ margin: "auto", width: 1000, height: 200, objectFit: "contain", backgroundColor: "black" }}
                    />

                </ul>
    }
}

class DrinkTransitions extends Component<{}, { currentIndex: number }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }
    
    // next click and prev click can be simplified even further...
    NextClick = () => {
        const currentIndex = this.state.currentIndex;
        const totalImages = drinkImages.length;
        
        if (currentIndex < totalImages - 1) {
            this.setState({ currentIndex: currentIndex + 1 }, () => {
                console.log("Next image index:", this.state.currentIndex);
            });
        } else {
            // Reset to first image
            this.setState({ currentIndex: 0 }, () => {
                console.log("Reset to image index:", this.state.currentIndex);
            });
        }
    }
    
    PrevClick = () => {
        const currentIndex = this.state.currentIndex;
        const totalImages = drinkImages.length;
        
        if (currentIndex > 0) {
            this.setState({ currentIndex: currentIndex - 1 }, () => {
                console.log("Previous image index:", this.state.currentIndex);
            });
        } else {
            // Go to last image
            this.setState({ currentIndex: totalImages - 1 }, () => {
                console.log("Looped to last image index:", this.state.currentIndex);
            });
        }
    }
   
    override render(): ReactNode {
        return (
            <div className="banner-container">

                <nav className="hoverCircle left-button" onClick = {this.PrevClick}>
                    <a href="#">&lt;</a>
                </nav>

                <img
                    src={drinkImages[this.state.currentIndex]}
                    alt="slide"
                    className="banner-image"
                    style = {{display: "block", margin: "auto", width: "100%", height: "600px", objectFit: "cover", }}
                />

                <nav className="hoverCircle right-button" onClick = {this.NextClick}>
                
                <a href="#">&gt;</a>
                
                </nav>

            </div>
        );
    }
}

/**
 * This class will be used to make objects that will
 * populate a scrollable view. The objects will store the 
 * date and description of the notable achievment.
 * 
 */

class ScrollTimeline extends Component {
    override render(): ReactNode {
        const items = toChooseFrom.map((drink, index) => (
            <div key={index} style={{ fontSize: "25px", marginBottom: "40px", padding: "20px", backgroundColor: "#111", borderRadius: "10px", color: "#eee" }}>
                                                          
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h2 style={{ margin: 0 }}>{drink.company}</h2>
                <p style={{ fontStyle: "italic", margin: 0 }}>{drink.date}</p>
              </div>
                                                          
                <p style={{ margin: "10px 0" }}>{drink.tagline}</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    {drink.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
                <p style={{ fontWeight: "lighter", marginTop: "10px" }}>{drink.description}</p>
                                                          
            </div>
        ));
        
        const items2 = stapleDrinks.map((drink, index) => (
            <div key={index} style={{ fontSize: "25px", marginBottom: "40px", padding: "20px", backgroundColor: "#111", borderRadius: "10px", color: "#eee" }}>
                                                          
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h2 style={{ margin: 0 }}>{drink.company}</h2>
                <p style={{ fontStyle: "italic", margin: 0 }}>{drink.date}</p>
              </div>
                                                          
                <p style={{ margin: "10px 0" }}>{drink.tagline}</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    {drink.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
                <p style={{ fontWeight: "lighter", marginTop: "10px" }}>{drink.description}</p>
                                                          
            </div>
        ));


        return (
            <div style={{ margin: "auto", overflowY: "auto", height: "500px", width: "100%", padding: "20px" }}>
                {items}
                
            </div>
                
        );
                
    }
}
        
class StapleDrinks extends Component {
    override render(): ReactNode {
        const items = stapleDrinks.map((drink, index) => (
            <div key={index} style={{ fontSize: "25px", marginBottom: "40px", padding: "20px", backgroundColor: "#111", borderRadius: "10px", color: "#eee" }}>
                                                          
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <h2 style={{ margin: 0 }}>{drink.company}</h2>
                <p style={{ fontStyle: "italic", margin: 0 }}>{drink.date}</p>
              </div>
                                                          
                <p style={{ margin: "10px 0" }}>{drink.tagline}</p>
                <ul style={{ paddingLeft: "20px", marginBottom: "10px" }}>
                    {drink.ingredients.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
                <p style={{ fontWeight: "lighter", marginTop: "10px" }}>{drink.description}</p>
                                                          
            </div>
        ));
        
        return (
            <div style={{ margin: "auto", overflowY: "auto", height: "500px", width: "100%", padding: "20px" }}>
                
                {items}
            </div>
                
        );
    }
}


/**
 * This class is a framework for the game description.
 */
class Description extends Component {
    override render(): ReactNode {
        // text reading the name of the game
        // the rules
        // and lets the player see their score
        return  <div>
                    <p style = {{fontSize: "50px"}}>
                        
                            Signature Refreshers
                            <ul style = {{borderTop: "3px solid #bbb", margin: "auto"}}></ul>
                            
                    </p>
                </div>
    }
}

class StapleD extends Component {
    override render(): ReactNode {
        return  <div>
                    <p style = {{fontSize: "50px"}}>
                        
                            Staple Refreshers
                            <ul style = {{borderTop: "3px solid #bbb", margin: "auto"}}></ul>
                            
                    </p>
                </div>
    }
}

class About extends Component {
    override render(): ReactNode {
        
        
        return (
            <section id="about" style={{ padding: "40px", fontSize: "20px", lineHeight: "1.6", textAlign: "center" }}>
                <p>Monday 4pm – 9pm</p>
                <p>Tuesday Closed</p>
                <p>Wednesday Closed</p>
                <p>Thursday 4pm – 9pm</p>
                <p>Friday 4pm – 9pm</p>
                <p>Saturday & Sunday 4pm – 9pm</p>
            </section>
        );
        
    }
    
}


const rootElem = document.getElementById('root');

if( rootElem == null ) {
    alert('you forgot to put a root element in your HTML file.');
}

const root = createRoot( rootElem as HTMLElement );
//<Board height={10} width={10}/>
root.render(
        <StrictMode>
            <div style={{backgroundColor: "black", color: "white", minHeight: "100vh", width: "100%", overflow: "hidden"}}>
                <Title/>
                <Banner/>
                <DrinkTransitions/>
                <Description/>
                <ScrollTimeline/>
                <StapleD/>
                <StapleDrinks/>
                <About/>
            </div>
    </StrictMode>   
);
