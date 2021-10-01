import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  }, [dispatch, user]);

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
      {userSchedule
        ? userSchedule.map((perf, key) => {
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
