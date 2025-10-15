// services/ProjectService.js
import { supabase } from '../config/supabase';

export const ProjectService = {
  // Mendapatkan semua proyek
  async getAllProjects() {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error('Error fetching projects:', error);
        return { success: false, error: error.message, data: [] };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching projects:', error);
      return { success: false, error: error.message, data: [] };
    }
  },

  // Mendapatkan proyek berdasarkan ID
  async getProjectById(id) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching project by id:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error fetching project by id:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menambah proyek baru
  async createProject(project) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .insert([project])
        .select()
        .single();

      if (error) {
        console.error('Error creating project:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error creating project:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Memperbarui proyek
  async updateProject(id, project) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .update(project)
        .eq('id', id)
        .select()
        .single();

      if (error) {
        console.error('Error updating project:', error);
        return { success: false, error: error.message, data: null };
      }

      return { success: true, data, error: null };
    } catch (error) {
      console.error('Unexpected error updating project:', error);
      return { success: false, error: error.message, data: null };
    }
  },

  // Menghapus proyek
  async deleteProject(id) {
    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting project:', error);
        return { success: false, error: error.message };
      }

      return { success: true, error: null };
    } catch (error) {
      console.error('Unexpected error deleting project:', error);
      return { success: false, error: error.message };
    }
  }
};