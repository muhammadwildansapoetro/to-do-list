This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## State Management dengan Zustand

### Mengapa Menggunakan Zustand?
Zustand adalah alat yang membantu mengelola data dalam aplikasi React dengan cara yang lebih sederhana. Dibandingkan dengan Redux, Zustand lebih mudah digunakan karena memiliki sintaks yang lebih ringkas dan tidak memerlukan banyak konfigurasi tambahan. Selain itu, Zustand juga bisa menyimpan data secara otomatis di localStorage, sehingga data tetap ada meskipun halaman direfresh.

### Implementasi Zustand di Aplikasi To-Do List
Pada aplikasi ini, Zustand digunakan untuk mengelola daftar tugas (tasks), input tugas baru, dan filter status tugas. Berikut adalah langkah-langkah implementasi:

1. **Membuat Store dengan Zustand**
   Kita membuat store menggunakan fungsi `create` dari Zustand. Di dalamnya, kita mendefinisikan state seperti `tasks`, `taskInput`, dan `filter`, serta beberapa fungsi untuk mengubah state tersebut.

2. **Menyimpan State secara Persisten**
   Kita menggunakan middleware `persist` dari Zustand untuk menyimpan state ke localStorage agar data tetap ada meskipun halaman direfresh.

3. **Menggunakan Store di Komponen**
   Dengan memanfaatkan `useStore`, kita bisa membaca dan memodifikasi state di berbagai komponen aplikasi, seperti menambahkan tugas baru, mengubah status tugas, dan menghapus tugas.

Berikut adalah contoh kode implementasi store dengan Zustand:

```tsx
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { IStore } from "@/types/types";

const useStore = create<IStore>()(
  persist(
    (set) => ({
      tasks: [],
      taskInput: "",
      filter: "all",

      setTaskInput: (input) => set({ taskInput: input }),

      addTask: (task) =>
        set((state) => ({
          tasks: [...state.tasks, task],
        })),

      toggleTaskComplete: (id) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
          ),
        })),

      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== id),
        })),

      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "task-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
```

Dengan menggunakan Zustand, aplikasi ini dapat mengelola state dengan lebih efisien dan sederhana tanpa kompleksitas yang berlebihan.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

