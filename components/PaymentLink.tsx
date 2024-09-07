import Link from 'next/link'

interface PaymentLinkProps {
  className?: string
  children: React.ReactNode
}

export default function PaymentLink({ className, children }: PaymentLinkProps) {
  const paymentUrl = 'https://buy.stripe.com/9AQcQCgUsaaXeDS5ko'

  return (
    <Link href={paymentUrl} className={className}>
      {children}
    </Link>
  )
}