import type { PageServerLoad } from './$types';

interface Event {
    id: string;
    name: string;
    title: string;
    description: string;
    image: string;
    location: string;
    latitude: number;
    longitude: number;
    ticketLink: string;
    date: string;
    time: string;
    price: string;
}

export const load = (async () => {

    const profilePictureId = "1BDYj5IIN-9y-rV83gIQG80PBJhcCel-S";
    const profilePicture = `https://drive.google.com/thumbnail?id=${profilePictureId}&sz=w1000`;
    const soundcloud = "https://soundcloud.com/jowo-416413370"
    const instagram = "https://www.instagram.com/jowo.dj/"

    const fakeEvents: Event[] = [
        {
            id: "1",
            name: "UNDERGROUND REBELLION",
            title: "Abyss of Bass",
            description: "Deep dark industrial warehouse. No phones allowed. Dress in black. Pure hard techno from 11 PM until sunrise. Expect relentless 150+ BPM.",
            image: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2079&auto=format&fit=crop",
            location: "Secret Location (TBA to ticket holders)",
            latitude: -34.5912,
            longitude: -58.4231,
            ticketLink: "https://example.com/tickets/1",
            date: "2026-03-15",
            time: "23:00 - 08:00",
            price: "$30"
        },
        {
            id: "2",
            name: "INDUSTRIAL DECAY",
            title: "Concrete Jungle Session",
            description: "A crumbling factory transformed into a sanctuary of sound. Extremely high BPM. Strobe lights warning. Enter at your own risk.",
            image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2074&auto=format&fit=crop",
            location: "Sector 7G Industrial Zone",
            latitude: -34.6037,
            longitude: -58.3816,
            ticketLink: "https://example.com/tickets/2",
            date: "2026-04-02",
            time: "23:59 - 10:00",
            price: "$45"
        },
        {
            id: "3",
            name: "THE VAULT",
            title: "Basement Sequence",
            description: "Intimate underground setting. Sweat leaking from the ceiling. A journey through the darkest realms of industrial techno.",
            image: "https://images.unsplash.com/photo-1558317751-bc3ed6f85f72?q=80&w=2070&auto=format&fit=crop",
            location: "The Underground Vaults",
            latitude: -34.6152,
            longitude: -58.3912,
            ticketLink: "https://example.com/tickets/3",
            date: "2026-05-18",
            time: "01:00 - 12:00",
            price: "$25"
        }
    ];

    return {
        profilePicture,
        soundcloud,
        instagram,
        events: fakeEvents
    };
}) satisfies PageServerLoad;