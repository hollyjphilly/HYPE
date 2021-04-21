<img src="https://i.ibb.co/2sJSr3J/Screen-Shot-2021-04-02-at-12-44-25-PM.png" alt="Hype Logo" border="0">

<br/>
<h1>Meet the Team</h1>
<table>
<thead>
<tr>
<th><img src="https://i.ibb.co/jvCDtCD/alec-caro.jpg" alt="Alec Caro"></th>
<th><img src="https://i.ibb.co/VSFy3Gw/IMG-5549.jpg" alt="Hammad Khalid"></th>
<th><img src="https://i.ibb.co/hZNqC9S/Holly-Phillips.png" alt="Holly Phillips"></th>
<th><img src="https://i.ibb.co/10FSPjJ/IMG-0876.png" alt="Stewart Morales"></th>
</tr>
</thead>
<tbody>
<tr>
<td><p align="center">Alec Caro<br/>Project Lead</p></td>
<td><p align="center">Hammad Khalid<br/>Backend Lead</p></td>
<td><p align="center">Holly Phillips<br/>Frontend Lead</p></td>
<td><p align="center">Stewart Morales<br/>Fullstack Dev</p></td>
</tr>
</tbody>
</table>

<a href="http://hype-event.herokuapp.com/#/"><br/><h1>Click Here to View the Live Demo</h1></a>
<img src="https://drive.google.com/uc?export=view&id=1_BFBD1O-MPNJTShizjAVW_AFAj9y40eq" alt="gifgifmov" border="0">

<a href="https://github.com/hollyjphilly/HYPE/wiki"><br/><h2>Click Here to View the Design Docs</h2></a>
<br/>

<h2>Background & Overview</h2>
<p>HYPE is a social networking app for adults who haven't outgrown schoolyard games. Users can create and join-in on intramural sporting events, including hide-and-go-seek, dodge-ball, freeze tag, sardines, capture the flag, and more. The HYPE app will allow users to find fun ways to exercise, make memories, and form long-lasting friendships. In short, a meet up app for athletic adults, who are children at heart!</p>

<h2>Functionality & MVPs</h2>
<ul>
<li>User authentication system allows for secure user registration and login</li>
<li>Event index displays all events in the database</li>
<li>Search bar in the index allows users to quickly sort by title</li>
<li>Event map allows to brouse by location, picking events in their area</li>
<li>Event show page displays all event details, allows users to RSVP, and has a cute map</li>
<li>Dashboard allows a user to see all events they're attending and hosting</li>
<li>Avatar builder on the dashboard lets each user customize a little them!</li>
</ul>

<h2>Challanges</h2>

<h3>MongoDB, Mongoose, & NoSQL</h3>

<p>This project was a first venture into MERN and NoSQL databases for the entire team. As such NoSQL took us several days to wrap our heads around. The breakthrough came when we wanted to display additional user information on each "Event Show Page". Our instinct was to take the user's ID and search the database for a corresponding user. That's when we remembered reading about embedding. After a couple hours of watching videos, tinkering with code, and combing through documentation, we figured it out. The Mongoose populate method did exactly what we wanted...</p>

<pre>
  <code>
    router.get("/:id", (req, res) => {
      Event.findById(req.params.id)
        .populate("host", "username")
        .then((event) => res.json(event))
        .catch((err) => res.status(400).json(err));
    });
  </code>
</pre>

<p>When we saw the results in our database we were ecstatic. We started shouting "MONGOOSE!" quite loudly. The document/collection system of the NoSQL MongoDB allowed us to customize routes and pull data how we needed it for each use case. This is a powerful tool that we are all glad to have worked with, under Hammad's steady guidance as backend lead.</p>

<h3>Google Maps API, and its Many React Libraries</h3>

<!-- <p>While the Google Maps API is well documented, it was by no means easy to learn or implement. The first big hurdle was in trying to hide our API Key. Alec had previously hidden an API key in Rails, and undertook figuring out how to hide it in MERN. After much fiddling, we learned that keys in MERN needed to be hidden in the source folder. The plot thickened when we learned this technique was incompatible with our Heroku hosting. After so much struggle, it turned out the best way to protect our key was not to hide it at all. Instead we white-listed all sites that would use the key for development and production.</p> -->

<p>As this project uses React, we felt that it was appropriate to utilize a relevant library. We started out using the 'react-google-maps' library, and got fairly deep into its implementation before realizing that it worked best with hooks. This was a problem because no one on our team was familiar with using hooks in React, and the project deadline was the next day. This led to sloppy re-renders in our event map, which not only looked bad, but also ran up a bill on Stewart's google cloud account. We revisited the project after the deadline, and found out that the 'google-maps-react' library was better maintained and less hook reliant, allowing us to refactor and clear up this issue. The maps don't re-render on every click, and Stuart's bank account is safe once more.</p>

<p>The first version of our "Create Event Form" had users clicking on a mini-map to set the event location. This was not ideal, as we wanted event to have an actual written address. Holly took the lead on this task, and used the geocode API to convert an input string into a latitude and longitude. Next, in order to have the location input autocomplete to real world addresses, we utilized the 'Places' library. Seeing this autocomplete in action was one of the most satisfying moments of the project. Unfortunately, even with the autocomplete working, and strings being converted to LatLng, we still had issues connecting these pieces. The autocomplete locations were not properly added to local state. We were able to bridge this gap by adding an event listener to the autocomplete in the component did mount.</p>

<pre>
  <code>
    componentDidMount() {
      const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("autocomplete")
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        this.setState({
          address: `${place.name}, ${place.formatted_address}`,
        });
      });
    }
  </code>
</pre>

<br/>
<h2>Thanks for stopping by!</h2>
<img src="https://i.ibb.co/mTYrnMW/fistbump.png" alt="pic of founders fistbumping">
