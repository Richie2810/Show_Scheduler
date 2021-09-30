import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Performances from "../components/Performances";
import { getPerformances } from "../store/performance/actions";
import { selectAllPerformances } from "../store/performance/selector";

export default function Shows() {
  const dispatch = useDispatch();
  const allPerf = useSelector(selectAllPerformances);
  useEffect(() => {
    dispatch(getPerformances());
  }, [dispatch]);

  //   console.log(allPerf);

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
                description={perf.description}
                status={perf.status}
              />
            );
          })
        : null}
    </div>
  );
}
