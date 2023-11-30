import React, { useEffect, useState } from "react";

export default function TimeOut() {
    const [second, setSecond] = useState(59);
    const [minute, setMinute] = useState(29);
    useEffect(() => {
        function countDown() {
            const startTime = new Date();
            // Set the date we're counting down to
            const countDownDate = new Date(
                startTime.getTime() + 30 * 60000
            ).getTime();

            // Update the count down every 1 second
            const x = setInterval(function () {
                // Get today's date and time
                const now = new Date().getTime();

                // Find the distance between now and the count down date
                const distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                const minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // If the count down is finished, write some text
                setSecond(seconds);
                setMinute(minutes);

                if (distance < 0) {
                    clearInterval(x);
                    alert('TIME UP! SESSION EXPIRED.')
                    setSecond(0);
                    setMinute(0);
                }
            }, 1000);
        }
        countDown();
        return () => countDown();
    }, []);
    return (
        <div id="timeRemaining">
            <p className="text-lg font-bold text-slate-600 text-center">
                Session Timeout in
            </p>
            <p className="text-2xl font-bold text-slate-400 text-center">
                {minute} min {second} sec
            </p>
        </div>
    );
}
