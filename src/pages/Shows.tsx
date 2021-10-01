import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInterval } from "timers";
import Performances from "../components/Performances";
import Schedule from "../components/Schedule";
import { getPerformances } from "../store/performance/actions";
import { selectAllPerformances } from "../store/performance/selector";
import { getSchedule } from "../store/schedule/actions";
import { selectSchedule } from "../store/schedule/selector";
import { selectUser } from "../store/user/selector";

export default function Shows() {
  const dispatch = useDispatch();
  const allPerf = useSelector(selectAllPerformances);
  const user = useSelector(selectUser);
  const userSchedule = useSelector(selectSchedule);

  useEffect(() => {
    dispatch(getPerformances());
    dispatch(getSchedule(user.name));
    const interval = setInterval(() => {
      dispatch(getSchedule(user.name));
    }, 60000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, user]);

  const checkForAlerts = (schedule) => {
    const shouldAlert = schedule.map((sch) => {
      return {
        ...sch,
        status: new Date(sch.start_date).getTime() < new Date().getTime(),
      };
    });
    return shouldAlert;
  };
  const alerts = checkForAlerts(userSchedule);
  return (
    <div>
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
      {alerts
        ? alerts.map((perf, key) => {
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
        : null}
    </div>
  );
}
