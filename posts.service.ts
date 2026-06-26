import { httpResource } from '@angular/common/http';
import { computed, Injectable, Signal } from '@angular/core';
import { CATEGORIES_DATA } from 'src/app/features/blog/data/categories.data';
import { BlogPostModel } from 'src/app/features/blog/models/blog-post.model';
import { slugify } from 'src/app/features/blog/models/categories.model';
import { PostDetailModel } from 'src/app/features/blog/models/post-detail.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostsService {
  // Petición HTTP para traer los posts
  private allPostsResource = httpResource<BlogPostModel[]>(() => 'data/credito-zoom/posts.json')

  // Posts ordenados por fecha de creación (más recientes primero).
  // 'fecha' viene en formato YYYY-MM-DD, por lo que se puede comparar como texto.
  // Los posts sin fecha se colocan al final.
  private sortedPosts = computed(() => {
    const posts = this.allPostsResource.value();
    if (!posts) return [];

    return [...posts].sort((a, b) => {
      if (!a.fecha) return 1;
      if (!b.fecha) return -1;
      return b.fecha.localeCompare(a.fecha);
    });
  });

  getPosts(category: Signal<string>, currentPage: Signal<number>, pageSize: Signal<number>) {
    // Filtro por categoria
    const filteredPosts = computed(() => {
      const posts = this.sortedPosts();
      const currentCat = category();

      if (!posts) return [];
      if (!currentCat) return posts

      // Utiliza el array de ALLOWED_CATEGORIES para obtener una categoría a partir de la id (url)
      const aux = CATEGORIES_DATA.find(cat => cat.id === currentCat);

      // Devuelve los post filtrados por la categoria (label) si no hay devuelve array vacio
      return aux ? posts.filter(p => slugify(p.postCategory) === aux.id || p.postCategory === aux.link.txt) : []
    })

    // Paginamos
    const paginatedPost = computed(() => {
      const posts = filteredPosts()
      const page = currentPage()
      const size = pageSize()

      const start = (page - 1) * size
      const end = start + size

      return posts.slice(start, end)
    })

    // Devolvemos Array de paginados
    return {
      posts: paginatedPost,
      totalItems: computed(() => filteredPosts().length),
      isLoading: this.allPostsResource.isLoading,
      error: this.allPostsResource.error
    }
  }

  getArticle(category: Signal<string>, article: Signal<string>) {
    const metaDataResource = httpResource<PostDetailModel>(() => {
      const cat = category()
      const art = article()

      if (!cat || !art) return undefined

      return `data/credito-zoom/articles/${cat}/${art}/metadata.json`
    })

    const markdownResource = httpResource.text(() => {
      const meta = metaDataResource.value()

      if (!meta || !meta.contentMd) return undefined

      return `${meta.contentMd}`
    })

    return {
      metadata: metaDataResource,
      markdown: markdownResource,

      isLoading: computed(() => metaDataResource.isLoading() || markdownResource.isLoading()),
      error: computed(() => metaDataResource.error() || markdownResource.error()),
    }
  }

  getLastPosts(number: number) {
    const lastPosts = computed(() => {
      const posts = this.sortedPosts();
      if (!posts) return [];

      return posts.slice(0, number);
    })

    // Devolvemos Array de paginados
    return {
      posts: lastPosts,
      isLoading: this.allPostsResource.isLoading,
      error: this.allPostsResource.error
    }
  }

  generateUrl(category: string, title: string): string {
    const cat = slugify(category);

    return `/credito-zoom/${cat}/${normalizeTitle(title)}`;
  }
}

export function normalizeTitle(txt: string): string {
  // Diccionario de palabras vacías en español a eliminar
  const stopWords = new Set([
    'el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas',
    'de', 'del', 'al', 'para', 'por', 'con', 'como', 'sobre',
    'y', 'o', 'e', 'u', 'en', 'su', 'sus', 'tu', 'tus', 'que'
  ]);

  return txt
    .toLowerCase()
    // 2. Traducir símbolos comunes antes de limpiar
    .replace(/&/g, ' y ')
    // 3. Normalizar y eliminar acentos (á -> a, ñ -> n)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    // 4. Eliminar cualquier cosa que no sea letra, número o espacio
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    // 5. Dividir en palabras para filtrar las 'stop words'
    .split(/[\s_-]+/)
    .filter(word => !stopWords.has(word) && word.length > 0)
    // 6. Si el título se quedara vacío (ej: "El o la"), usar las palabras originales limpias
    .slice(0)
    // 7. Unir con un único guión medio
    .join('-');
}
