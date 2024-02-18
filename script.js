const auth_link = "https://www.strava.com/oauth/token";

function getActivities(res) {

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`;

    fetch(activities_link)
        .then((res) => console.log(res.json()));

}

function reAuthorize() {

    fetch(auth_link, {
        method: "post",
        headers: {
            "Accept": "application/json, text/plain, */*",
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            client_id: 121643,
            client_secret: "a54be767979f4c57ee60babb317056e136696a82",
            refresh_token: "c43b899cca9b0da11fa72c4f9e4a9ca7e1ce3543",
            grant_type: "refresh_token"
        })
    }).then(res => res.json()).then(res => getActivities(res));
}

reAuthorize();