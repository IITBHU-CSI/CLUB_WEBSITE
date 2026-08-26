import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle2,
  XCircle,
  Calendar,
  Award,
  FileCheck,
  Building,
  ShieldCheck,
  Clock,
  X,
  Printer,
} from "lucide-react";
import { certificateData } from "../data/certificateData";

export default function CertificateVerification() {
  const [searchParams, setSearchParams] = useSearchParams();
  const serialParam = searchParams.get("serial");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  
  // Modal states
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [invalidSerial, setInvalidSerial] = useState(null);

  // Handle URL parameter on mount or change
  useEffect(() => {
    if (serialParam) {
      const decodedSerial = decodeURIComponent(serialParam).trim();
      const cert = certificateData.find(
        (c) => c.serialNumber.toLowerCase() === decodedSerial.toLowerCase()
      );
      if (cert) {
        setSelectedCertificate(cert);
        setInvalidSerial(null);
      } else {
        setInvalidSerial(decodedSerial);
        setSelectedCertificate(null);
      }
    } else {
      setSelectedCertificate(null);
      setInvalidSerial(null);
    }
  }, [serialParam]);

  // Sync state back to URL when closing modal
  const closeModal = () => {
    setSelectedCertificate(null);
    setInvalidSerial(null);
    setSearchParams({});
  };

  const handleSelectCertificate = (cert) => {
    setSelectedCertificate(cert);
    setInvalidSerial(null);
    setSearchParams({ serial: cert.serialNumber });
  };

  const filteredCertificates = certificateData.filter((cert) => {
    const matchesSearch =
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.serialNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || cert.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-100 py-16 px-4 sm:px-6 lg:px-8 relative">
      {/* Print-specific style block */}
      <style>{`
        @media print {
          body {
            background: white !important;
          }
          /* Hide everything in the DOM */
          body > #root ~ *, 
          #root,
          nav, 
          footer,
          .absolute,
          .fixed {
            display: none !important;
            visibility: hidden !important;
          }
          /* Except the modal and the print container */
          #print-modal-backdrop {
            display: block !important;
            visibility: visible !important;
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            height: auto !important;
            background: white !important;
            backdrop-filter: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          #print-certificate-card {
            display: block !important;
            visibility: visible !important;
            width: 100% !important;
            max-width: 100% !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-hide {
            display: none !important;
            visibility: hidden !important;
          }
        }
      `}</style>

      {/* Decorative background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 print-hide">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-amber-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute -bottom-10 left-20 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10 print-hide">
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-[#880163] text-sm font-semibold mb-4 shadow-sm"
          >
            <ShieldCheck className="w-4 h-4 text-[#880163]" />
            Official CSI Verification Portal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-serif font-extrabold text-[#880163] tracking-tight mb-4"
          >
            Certificate Verification
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Verify the authenticity of certificates issued by the **Club of Sustainability & Innovation, IIT (BHU) Varanasi**.
          </motion.p>
        </div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-amber-200/50 shadow-xl mb-8 flex flex-col md:flex-row gap-4 items-center justify-between"
        >
          {/* Search bar */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </span>
            <input
              type="text"
              placeholder="Search by student name or serial number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 bg-amber-50/50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#880163] focus:border-transparent text-gray-800 placeholder-gray-400 transition-all text-sm"
            />
          </div>

          {/* Filter status */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-sm font-semibold text-gray-700 whitespace-nowrap">Filter Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block py-2 px-3 border border-amber-200 bg-amber-50/50 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#880163] text-sm cursor-pointer transition-all"
            >
              <option value="All">All Certificates</option>
              <option value="Verified">Verified Only</option>
            </select>
          </div>
        </motion.div>

        {/* Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white/95 backdrop-blur-md rounded-2xl border border-amber-200/50 shadow-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-amber-100">
              <thead className="bg-gradient-to-r from-orange-50 to-amber-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#880163] uppercase tracking-wider w-16">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#880163] uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#880163] uppercase tracking-wider">
                    Serial Number
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-[#880163] uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-amber-100/50">
                <AnimatePresence>
                  {filteredCertificates.length > 0 ? (
                    filteredCertificates.map((cert, index) => (
                      <motion.tr
                        key={cert.serialNumber}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => handleSelectCertificate(cert)}
                        className="hover:bg-amber-50/40 transition-colors duration-200 cursor-pointer group"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-500">
                          {index + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 group-hover:text-[#880163] transition-colors">
                          {cert.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-mono font-medium text-amber-800">
                          {cert.serialNumber}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            {cert.status}
                          </span>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="px-6 py-16 text-center text-gray-500">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <XCircle className="w-10 h-10 text-amber-300" />
                          <p className="text-lg font-semibold text-gray-700">No certificates found</p>
                          <p className="text-sm text-gray-500">Try adjusting your search query or filters.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      {/* MODAL POPUP: CERTIFICATE DETAILS */}
      <AnimatePresence>
        {(selectedCertificate || invalidSerial) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative max-w-sm w-full rounded-3xl overflow-hidden bg-white border border-amber-200/50 shadow-2xl p-8 text-center flex flex-col items-center gap-6"
              onClick={(e) => e.stopPropagation()} // Prevent close on modal body click
            >
              {/* Close Button ('X') */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {selectedCertificate ? (
                <>
                  {/* Verified Icon & Pill */}
                  <div className="w-20 h-20 bg-emerald-50 border-4 border-emerald-100 rounded-full flex items-center justify-center text-emerald-500 shadow-md">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 uppercase tracking-wider">
                      Verified Certificate
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900 font-serif pt-2 leading-tight">
                      {selectedCertificate.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-mono bg-amber-50/60 px-3 py-1 rounded-full inline-block border border-amber-100">
                      ID: {selectedCertificate.serialNumber}
                    </p>
                  </div>

                  <div className="w-full bg-emerald-50/40 border border-emerald-100/50 rounded-2xl p-4 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                    <span className="text-xs font-bold text-emerald-800">
                      Verification Successful
                    </span>
                  </div>

                  <button
                    onClick={closeModal}
                    className="w-full py-2.5 bg-gradient-to-r from-[#880163] to-[#ae0080d3] hover:from-[#ae0080d3] hover:to-[#880163] rounded-xl text-sm font-bold text-white transition-all shadow-md active:scale-95"
                  >
                    Done
                  </button>
                </>
              ) : (
                /* Invalid Certificate Warning Modal */
                <>
                  <div className="w-20 h-20 bg-red-50 border border-red-100 rounded-full flex items-center justify-center text-red-500 shadow-md">
                    <XCircle className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-100 uppercase tracking-wider">
                      Verification Failed
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 pt-2 leading-tight">
                      Invalid Credential
                    </h3>
                    <p className="text-xs text-gray-500 font-mono bg-red-50/30 px-3 py-1 rounded-full inline-block border border-red-100">
                      ID: {invalidSerial}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 max-w-xs mx-auto leading-relaxed">
                    This serial number could not be validated or is not registered in our records.
                  </p>

                  <button
                    onClick={closeModal}
                    className="w-full py-2.5 bg-gray-150 hover:bg-gray-200 rounded-xl text-sm font-bold text-gray-700 transition-all active:scale-95"
                  >
                    Dismiss
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
