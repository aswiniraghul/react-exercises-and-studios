export default function HobbyLinks() {
    const Links = ["https://store.steampowered.com/", "https://www.newegg.com/"]

    return (
        <div>
            <h3>Hobby Links</h3>
            <a href = {Links[0]}>Steam</a><br></br>
            <a href = {Links[1]}>Newegg</a>
        </div>

    );
}