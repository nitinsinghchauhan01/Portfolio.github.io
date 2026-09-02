import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Save, RotateCcw, Download, Upload, Check } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const Admin = () => {
  const { data, updateData, resetToCV } = usePortfolio();
  const [jsonText, setJsonText] = useState(JSON.stringify(data, null, 2));
  const [saveStatus, setSaveStatus] = useState('idle'); // idle, saving, success, error

  const handleJsonChange = (e) => {
    setJsonText(e.target.value);
  };

  const handleSave = () => {
    try {
      const parsed = JSON.parse(jsonText);
      updateData(parsed);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 3000);
    } catch (err) {
      alert("Invalid JSON data. Please check for syntax errors.");
      setSaveStatus('error');
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all data to the default CV data? This will overwrite your current changes.")) {
      resetToCV();
      // Need a small delay to let context update, or just force reload the window to be safe and clean
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  };

  const handleExport = () => {
    const blob = new Blob([jsonText], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target.result);
        setJsonText(JSON.stringify(importedData, null, 2));
      } catch (err) {
        alert("Error parsing imported JSON file.");
      }
    };
    reader.readAsText(file);
    e.target.value = null; // Reset input
  };

  return (
    <div className="min-h-screen bg-background text-gray-100 flex flex-col">
      {/* Header */}
      <header className="glass-nav py-4 border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold text-white">Portfolio Admin / Edit</h1>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-red-400 bg-red-400/10 hover:bg-red-400/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Reset to CV</span>
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-hover transition-colors shadow-lg"
            >
              {saveStatus === 'success' ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Saved!
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 bg-surface-lighter p-4 rounded-xl border border-white/5">
          <div>
            <h2 className="text-lg font-medium text-white mb-1">Data Editor (JSON)</h2>
            <p className="text-sm text-gray-400">Edit your portfolio information below. Changes are saved to local storage.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={handleExport}
              className="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Export
            </button>
            
            <label className="flex items-center px-3 py-1.5 text-sm font-medium rounded-md text-gray-300 bg-white/5 hover:bg-white/10 hover:text-white border border-white/10 transition-colors cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Import
              <input type="file" accept=".json" className="hidden" onChange={handleImport} />
            </label>
          </div>
        </div>

        <div className="flex-grow flex flex-col relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          {/* Very basic JSON editor, could be replaced with Monaco/CodeMirror for better experience if needed */}
          <textarea
            value={jsonText}
            onChange={handleJsonChange}
            className="w-full h-[60vh] md:h-[70vh] p-6 bg-[#1a1b26] text-[#a9b1d6] font-mono text-sm leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            spellCheck="false"
          ></textarea>
        </div>
        
        <div className="mt-4 text-xs text-gray-500 text-center">
          Note: Ensure your JSON structure remains intact (quotes around keys, correct commas) before saving.
        </div>
        
      </main>
    </div>
  );
};

export default Admin;
