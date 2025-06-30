// components/Stats.tsx
import StatCard from './StatCard'

const stats = [
  { value: '100%', label: 'University acceptance Rate' },
  { value: '15+', label: 'Academic Programs' },
  { value: '5+', label: 'Extra Curricular programs' },
  { value: '95+%', label: 'Fully Funded Scholarship' },
]

const Stats = (): JSX.Element => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <StatCard key={label} value={value} label={label} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

