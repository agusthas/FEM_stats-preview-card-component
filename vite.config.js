import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
  plugins: [reactRefresh()],
  base: '/FEM_stats-preview-card-component/',
});
