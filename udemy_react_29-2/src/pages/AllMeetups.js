import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage(){ 
  // 데이터 얻기 전 초기상태 : ture > loading
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(()=>{
    setIsLoading(true);
    // 데이터 받아오기 get
    fetch('https://react-getting-started-fc155-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
        return response.json();
    }).then(data => {
        const meetups = [];

        for (const key in data){
          const meetup = {
            id : key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        // 데이터를 얻어오면 false > 더 이상 로딩 x
        setIsLoading(false);
        setLoadedMeetups(meetups);
    });
  }, []);

    

    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }

    return(
        <section>
            <h1>All Meeups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;