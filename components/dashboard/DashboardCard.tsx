import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface DashboardCardProps {
  title: string;
  count: string;
  icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({title, count, icon}: DashboardCardProps) => {
  return (
    <Card className="bg-slate-100 dard:bg-slate-800 p-4 pb-0">
      <CardContent className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
        <h3>{title}</h3>
        <div className="flex gap-5 justify-center items-center">
          {icon}
          <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;