// utils/calculatePoints.ts
export const calculateDailyPoints = (seasonStart: Date, currentDate: Date): number => {
    const dayOfSeason =
      Math.floor((currentDate.getTime() - seasonStart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  
    if (dayOfSeason <= 0) return 0;
  
    let points = 0;
  
    if (dayOfSeason === 1) {
      points = 2;
    } else if (dayOfSeason === 2) {
      points = 3;
    } else {
      let prev = 3;
      let beforePrev = 2;
      for (let i = 3; i <= dayOfSeason; i++) {
        const todayPoints = Math.round(beforePrev + 0.6 * prev);
        beforePrev = prev;
        prev = todayPoints;
      }
      points = prev;
    }
  
    return points;
  };
  
  export const formatPoints = (points: number): string => {
    if (points >= 1000) {
      return Math.round(points / 1000) + 'K';
    }
    return points.toString();
  };
  