import Link from 'next/link'

interface PaymentLinkProps {
  className?: string
  children: React.ReactNode
}

export default function PaymentLink({ className, children }: PaymentLinkProps) {
  const paymentUrl = 'https://book.stripe.com/eVa3g26fO4QD0N2cMR'

  return (
    <Link href={paymentUrl} className={className}>
      {children}
    </Link>
  )
}