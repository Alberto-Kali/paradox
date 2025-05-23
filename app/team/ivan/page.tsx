"use client"

import { Button } from '@/components/ui/button'
import { ArrowLeft, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

export default function AlbertoPage() {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from('.content-block', {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power2.out'
    })
  }, { scope: container })

  const projects = [
    {
      title: 'Blockchain платформа',
      description: 'Разработка высоконагруженной блокчейн платформы для финансовых транзакций',
      technologies: ['Rust', 'React', 'PostgreSQL']
    },
    {
      title: 'AI ассистент',
      description: 'Создание интеллектуального ассистента для автоматизации бизнес-процессов',
      technologies: ['Python', 'TensorFlow', 'FastAPI']
    },
    {
      title: 'Мобильное приложение',
      description: 'Кроссплатформенное приложение для управления IoT устройствами',
      technologies: ['Flutter', 'Firebase', 'Dart']
    }
  ]

  return (
    <div ref={container} className="container mx-auto px-4 py-16">
      <div className="content-block mb-12">
        <Button asChild variant="ghost">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Назад к команде
          </Link>
        </Button>
      </div>

      <div className="content-block grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
        <div className="md:col-span-2">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Альберто Дженуарди</h1>
          <h2 className="text-2xl text-primary mb-8">Тимлид, Программист</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Опытный разработчик с более чем 8-летним стажем. Специализируется на архитектуре сложных систем и 
            высоконагруженных приложений. Обладает глубокими знаниями в области распределенных систем и 
            микросервисной архитектуры.
          </p>
          <div className="flex gap-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="bg-gradient-to-br from-primary to-secondary w-64 h-64 rounded-full"></div>
        </div>
      </div>

      <div className="content-block mb-24">
        <h3 className="text-3xl font-bold mb-8">Навыки</h3>
        <div className="flex flex-wrap gap-3">
          {['JavaScript/TypeScript', 'Node.js', 'Rust', 'Python', 'System Design', 'Microservices', 'Docker', 'Kubernetes', 'AWS', 'CI/CD'].map((skill, index) => (
            <span key={index} className="px-4 py-2 bg-muted rounded-full text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="content-block">
        <h3 className="text-3xl font-bold mb-8">Проекты</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 hover:border-primary transition-all">
              <h4 className="text-xl font-bold mb-3">{project.title}</h4>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-muted rounded-full text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}