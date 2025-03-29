export interface Achievements {
  id: number;
  category: string;
  description: string;
  dateOfAward: string;
}

export interface AchievementDetails {
  id: number;
  category: string;
  description: string;
  dateOfAward: string;
  typeOfAchievement: string;
  details: object;
  achievementFile: string;
}

export interface ApplicationAchievementDetails {
  id: number;
  application: number;
  userName: string;
  category: string;
  description: string;
  dateOfAward: string;
  typeOfAchievement: string;
  expertScore: number;
  commissionScore: number;
  details: object;
  achievementFile: string;
}
