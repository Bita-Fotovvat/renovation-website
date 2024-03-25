import RenoRemo from "../assets/images/renovation.jpeg";
import Kitchen from "../assets/images/kitchen.jpeg";
import Landscaping from "../assets/images/exterior.jpg";
import Basement from "../assets/images/basement.jpg";
import Washroom from "../assets/images/washroom.jpg";
import Electrical from "../assets/images/electrical.jpg";
import Plumbing from "../assets/images/plumbing.jpg";
import SmallJobs from "../assets/images/smalljobs.jpg";

export const TabsData = [
    {
        id:1,
        title: "Renovation & Remodeling Services",
        content:["Demolishing", "Painting", "Drywalling & Framing", "Taping", "Mudding & Sanding"],
        image: RenoRemo,
        tag: "renovation & remodeling services"
    },
    {
        id:2,
        title: "Basement Renovation",
        content:["Basement Design Consultation",
            "Waterproofing",
            "Foundation Repair",
            "Insulation Installation",
            "Egress Window Installation",
            "Flooring Installation (including subflooring)",
            "Lighting Solutions",
            "Home Theater Installation",
            "Custom Shelving and Storage Solutions",
            // "Basement Bar Construction",
            // "Gym or Workout Space Creation"
        ],
        image: Basement,
        tag: "basement renovation"
    },
    {
        id:3,
        title: "Bathroom Renovation",
        content:["Bathroom Remodeling", "Flooring Installation", "Tile Installation", "Countertop Resurfacing", "Bathtub Replacement"],
        image: Washroom,
        tag: "washroom renovation"
    },
    {
        id:4,
        title: "Kitchen Renovation",
        content:["Kitchen Remodeling", "Cabinet Replacement", "Flooring Installation", "Tile Installation"],
        image: Kitchen,
        tag: "kitchen renovation"
    },
    {
        id:5,
        title: "Electrical Services",
        content: ["Panel Changes", "Panel Upgrading", "Wiring", "Spotlight", "Light"],
        image: Electrical,
        tag: "electrical services"
    },
    {
        id:6,
        title: "Plumbing Services",
        content: ["Vanity Changing", "Faucet Changing", "Leak Detection & Repair", "Pipe Installation & Repair", "Faucet & Fixture Installation"],
        image: Plumbing,
        tag: "plumbing services"
    },
    {
        id:7,
        title: "Exterior Services",
        content:["Landscaping", "Exterior Painting", "Driveway", "Roofing", "Fence"],
        image: Landscaping,
        tag: "exterior services"
    },
    {
        id:8,
        title: "Small Jobs",
        content: ["Painting", "Electrical", "Carpentry", "Plumbing", "Light", "Spotlight", "Switch", "Plug", "Flooring", "Ceiling", "Door Changing"],
        image: SmallJobs,
        tag: "small jobs"
    }
]