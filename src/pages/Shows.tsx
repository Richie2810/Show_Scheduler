import { ObjectId } from "mongoose";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInterval } from "timers";
import Loading from "../components/Loading";
import Performances from "../components/Performances";
import Schedule from "../components/Schedule";
import { getPerformances, showsOver } from "../store/performance/actions";
import { selectAllPerformances } from "../store/performance/selector";
import { getSchedule } from "../store/schedule/actions";
import { selectSchedule } from "../store/schedule/selector";
import { selectUser } from "../store/user/selector";
import "./Shows.css";

interface PerfProps {
  _id: ObjectId;
  key: Number;
  id: ObjectId;
  title: String;
  start_date: Date;
  end_date: Date;
  status: Boolean;
  description: String;
}

export default function Shows() {
  const dispatch = useDispatch();
  const allPerf = useSelector(selectAllPerformances);
  const user = useSelector(selectUser);
  const userSchedule = useSelector(selectSchedule);
  const history = useHistory();

  useEffect(() => {
    dispatch(getPerformances());
    dispatch(getSchedule(user.name));
    dispatch(showsOver());
    const interval = setInterval(() => {
      dispatch(getSchedule(user.name));
      dispatch(showsOver());
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user]);

  //Here I am fetching the user schedule than mapping hrough it and adding a
  //new key to the object "Status" which will return a boolean
  //changing the dates to miliseconds and compareing them to see if they 15minutes away.
  //I than Map this new object with "status" for my component
  const checkForAlerts = (schedule: any) => {
    const shouldAlert = schedule.map((sch: PerfProps) => {
      return {
        ...sch,
        status:
          new Date(sch.start_date).getTime() < new Date().getTime() + 900000, //900000 is 15mins in miliseconds
      };
    });
    return shouldAlert;
  };
  const scheduleWithStatus = checkForAlerts(userSchedule);

  const logOut = () => {
    history.push("/");
    window.location.reload();
  };
  return (
    <>
      {user ? (
        <div className="Shows">
          <div>
            <h1>Hello {user.name}!</h1>
            <button
              type="button"
              onClick={() => {
                logOut();
              }}
            >
              Log out
            </button>
          </div>
          <div>
            <h2>Performances!</h2>
          </div>
          <div className="cards">
            {allPerf
              ? allPerf.map((perf: PerfProps, key: number) => {
                  return (
                    <Performances
                      key={key}
                      id={perf._id}
                      title={perf.title}
                      start_date={perf.start_date}
                      end_date={perf.end_date}
                      status={perf.status}
                      description={perf.description}
                    />
                  );
                })
              : null}
          </div>
          <div>
            <h2>Your Schedule!</h2>
            <h5>
              <i>
                Shows will turn orange and notify you when there is 15 minutes
                to show start
              </i>
            </h5>
          </div>
          <div className="cards">
            {scheduleWithStatus ? (
              scheduleWithStatus.map((perf: PerfProps, key: number) => {
                return (
                  <Schedule
                    key={key}
                    id={perf._id}
                    title={perf.title}
                    start_date={perf.start_date}
                    end_date={perf.end_date}
                    status={perf.status}
                    description={perf.description}
                  />
                );
              })
            ) : (
              <div>
                Looks like you havnt added anything to your Schedule yet! Find a
                perforance you like and press "add to schedule"
              </div>
            )}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
