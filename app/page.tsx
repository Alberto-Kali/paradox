"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function Home() {
  const container = useRef<HTMLDivElement>(null)
  const teamRefs = useRef<Array<HTMLDivElement | null>>([])

  useGSAP(() => {
    // Сначала скрываем все элементы
    gsap.set(teamRefs.current, {
      opacity: 0,
      y: 50
    })

    // Затем анимируем их появление
    gsap.to(teamRefs.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 0.3
    })
  }, { scope: container })

  const teamMembers = [
    {
      name: 'Альберто Дженуарди',
      role: 'Тимлид, Программист',
      slug: 'alberto',
      description: 'Опытный разработчик с более чем 8-летним стажем. Специализируется на архитектуре сложных систем.'
    },
    {
      name: 'Иван Иванов',
      role: 'Дизайнер, Аниматор',
      slug: 'ivan',
      description: 'Креативный дизайнер с уникальным чувством стиля. Создает потрясающие UI/UX и анимации.'
    },
    {
      name: 'Алиса Токугава',
      role: 'Специалист ИБ, Тестер',
      slug: 'alice',
      description: 'Эксперт по кибербезопасности и тестированию. Обеспечивает надежность и безопасность продуктов.'
    }
  ]

  return (
    <div ref={container} className="container mx-auto px-4 py-16">
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Paradox <span className="text-primary">Team</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Мы - креативная IT команда, специализирующаяся на разработке, дизайне и кибербезопасности.
          Каждый проект - это новый вызов и возможность создать что-то уникальное.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-12">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              ref={el => {
                if (el) teamRefs.current[index] = el
              }}
              className="opacity-0 bg-card p-6 rounded-lg border border-border hover:border-primary transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
              <p className="text-muted-foreground mb-6">{member.description}</p>
              <Button asChild variant="outline">
                <Link href={`/team/${member.slug}`}>
                  Посмотреть портфолио <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}