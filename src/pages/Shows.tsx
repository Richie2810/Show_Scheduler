import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setInterval } from "timers";
import Performances from "../components/Performances";
import Schedule from "../components/Schedule";
import { getPerformances, showsOver } from "../store/performance/actions";
import { selectAllPerformances } from "../store/performance/selector";
import { getSchedule } from "../store/schedule/actions";
import { selectSchedule } from "../store/schedule/selector";
import { selectUser } from "../store/user/selector";
import "./Shows.css";

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

  const checkForAlerts = (schedule) => {
    const shouldAlert = schedule.map((sch) => {
      return {
        ...sch,
        status:
          new Date(sch.start_date).getTime() < new Date().getTime() + 900000, //900000 is 15mins in miliseconds
      };
    });
    return shouldAlert;
  };
  const alerts = checkForAlerts(userSchedule);

  const logOut = () => {
    history.push("/");
    window.location.reload();
  };
  return (
    <>
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
            ? allPerf.map((perf) => {
                return (
                  <Performances
                    key={perf._id}
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
              Shows will turn orange and notify you when there is 15 minutes to
              show start
            </i>
          </h5>
        </div>
        <div className="cards">
          {alerts ? (
            alerts.map((perf, key) => {
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
    </>
  );
}
