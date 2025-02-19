export function DefaultCompanyLogo({ company }: { company: string }) {
  const initials = company
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="w-full h-full rounded-lg bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
      <span className="text-xl font-bold text-white">{initials}</span>
    </div>
  )
}
