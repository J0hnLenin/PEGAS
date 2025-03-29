export interface Applications {
  id: number;
  userName: string;
  status: string;
  achievementCount: number;
  createdAt: string;
}

export interface UserApplications {
  id: number;
  competition: string;
  achievementCount: number;
  createdAt: string;
  status: string;
}

export interface ApplicationDetails {
  id: number;
  userName: string;
  department: string;
  curriculum: string;
  courseNumber: number;
  formOfEducation: string;
  budgetLevel: string;
  status: string;
  createdAt: string;
  registrationNumber: string;
  assessmentScores: string; // оценки за последний семестр
  competition: string;
  comment: string;
}

export interface ApplicationAchievements{
  id: number;
  category: string;
  description: string;
  dateOfAward: string;
  typeOfAchievement: string;
  expertScore: number;
  commissionScore: number;
  details: object;
}
